import './game.css';
import GameBoard from "./board/board";
import BoardControl from "./boardControl/boardControl";
import {useEffect, useState} from "react";
import {doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../index";
import {useParams} from "react-router-dom";
import {Board} from "../../shared/board";
import checkForScore from '../../gameLogic';
import Modal from "./modal/modal";
import resetGame from "../../utils/resetGame";

import {useAudio} from "../audio/useAudio";
import click from "../../assets/click.wav"

const Game = () => {
    
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [board, setBoard] = useState(Board);
    const [myPlayerID, setMyPlayerID] = useState("");
    const [lastCard, setLastCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState(null);
    const [gameEnd, setGameEnd] = useState(-1);
    const toggle = useAudio(click);
    
    const canPlay = (row, col) => {
        
        // first play the card if it exists
        for (const card of data.currentCards[myPlayerID]) {
    
            if (card.number === "J") continue;
        
            if (((card.position[0][0] === row && card.position[0][1] === col)
                || (card.position[1][0] === row && card.position[1][1] === col))
                && board[row][col].team === -1) return card;
        }
    
        // check if jack exists
        for (const card of data.currentCards[myPlayerID]) {
            if (card.number === "J") {
                if ((card.suit === 'diamond' || card.suit === 'club') && board[row][col].team === -1) {
                    // valid two-eyed jack attempt
                    setModal({
                        row: row,
                        col: col,
                        card: card,
                        action: executePlay,
                        message: 'Are you sure you want to use Two-Eyed Jack?'
                    })
                    setShowModal(true);
                } else if ((card.suit === 'spade' || card.suit === 'heart') && board[row][col].team !== -1 && board[row][col].team !== data['currentTeam']) {
                    // one-eyed jack
                    if (data.scoreMatrix[row][col].scoreOfTeam !== -1) {
                        // counted in score. cannot remove this card
                        // show some log with timeout...
                        console.log('cannot play this move..');
                        return;
                    }
                    
                    card.oneEyed = true;
                    setModal({
                        row: row,
                        col: col,
                        card: card,
                        action: executePlay,
                        message: 'Are you sure you want to use One-Eyed Jack?'
                    })
                    setShowModal(true);
                }
            }
        }
        return false;
    }
    
    const updateCurrentBoard = (row, col, id) => {
        let newBoard = data.currentBoard;
        newBoard[row][col] = id;
        return newBoard;
    }
    
    const updateLocalBoard = (row, col, id) => {
        let localBoard = board;
        localBoard[row][col].team = id;
        setBoard(localBoard);
    }
    
    const parseCurrentBoard = (currentBoard, lastCard, currentPlayer) => {
        let localBoard = board;
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                localBoard[row][col].team = currentBoard[row][col];
            }
        }
        if (currentPlayer && lastCard) {
            localBoard[lastCard.row][lastCard.col].overlay = true;
        }
        setBoard(localBoard);
    }
    
    /**
     * Remove card and get another card...
     * */
    const discardCard = (card) => {
        setModal({
            card: card,
            action: discardCardConfirm,
            message: 'Are you sure you want to discard this card?'
        })
        setShowModal(true);
    }
    
    /**
     * Discard current card and pull another card to use...
     * */
    const discardCardConfirm = async (x, y, card) => {
        let newData = {...data};
    
        let cardIndex = getCardIndex(card);
        const randomInt = Math.floor(Math.random() * data.remainingCards.length);
        newData.currentCards[myPlayerID][cardIndex] = data.remainingCards[randomInt];
        newData.remainingCards.splice(randomInt, 1); // removing new pop-ed card
    
        await setDoc(doc(db, "games", id), newData);
    }
    
    /**
     * Utility method to check if current user
     * cards contain an already placed card
     * */
    const parseCurrentPlayerCards = (currentBoard, cards) => {
        for (const card of cards) {
            if (card.number !== "J") {
                card.discard = false;
                if (currentBoard[card.position[0][0]][card.position[0][1]] !== -1
                    && currentBoard[card.position[1][0]][card.position[1][1]] !== -1) {
                    card.discard = true;
                }
            }
        }
    }
    
    const getCardIndex = (card) => {
        for (let i = 0; i < data.currentCards[myPlayerID].length; i++) {
            if (card.suit === data.currentCards[myPlayerID][i].suit &&
                card.number === data.currentCards[myPlayerID][i].number) {
                return i;
            }
        }
    }

    // @MEET TODO: Need to update according to multi player
    const endOfGame = (data) => {
        const winnerId = data.score[1] > data.score[2] ? 1 : 2;
        // const winnerTeam = data.score.indexOf(2);
        const winnerTeam = Object.keys(data.score).find(key => data.score[key] === 2);
        if(winnerTeam != undefined) {
            setGameEnd(parseInt(winnerTeam));
        }

    }
    
    const reStartGame = async () => {
        await resetGame(id);
        setBoard(Board);
        setGameEnd(-1);
    }
    
    /**
     * Main method to implement play action
     * @param row Row of card selected
     * @param col Column of card selected
     * @param card Contains the card to be played
     * */
    const executePlay = async (row, col, card) => {
        let newData = {...data};
        let currentTeam = newData.currentTeam;
    
        if (card.oneEyed) {
            // remove opponent's card from board
            newData.currentBoard = updateCurrentBoard(row, col, -1);
            updateLocalBoard(row, col, -1); // is this required?
        } else {
            newData.currentBoard = updateCurrentBoard(row, col, currentTeam);
            updateLocalBoard(row, col, currentTeam); // is this required?
        }
    
        let cardIndex = getCardIndex(card);
        const randomInt = Math.floor(Math.random() * data.remainingCards.length);
        newData.currentCards[myPlayerID][cardIndex] = data.remainingCards[randomInt];
        newData.remainingCards.splice(randomInt, 1); // removing new pop-ed card
    
        newData.lastCardPlayed = card;
        newData.lastCardPlayed.row = row;
        newData.lastCardPlayed.col = col

        // Update Current Player
        newData.currentPlayer[currentTeam] = (newData.currentPlayer[currentTeam] + 1) % newData.teams[currentTeam].length;
        newData.currentTeam = (currentTeam + 1) % 3;
        if(newData.numberOfTeams === 2 && newData.currentTeam === newData.skipTeam) {
            newData.currentTeam = (newData.currentTeam + 1) % 3;
        }
        
        if (!card.oneEyed) {
            let result = checkForScore(data, row, col, currentTeam);
            if (result) {
                result.indexes.forEach(index => {
            
                    // TODO: Do not change for corners!!!
                    newData.scoreMatrix[index.x][index.y] = {
                        "scoreOfTeam": currentTeam,
                        "direction": result.direction
                    }
                })
        
                newData.scoreMatrix[row][col] = {
                    "scoreOfTeam": currentTeam,
                    "direction": result.direction
                }
        
                newData.score[currentTeam] = newData.score[currentTeam] + 1;
        
                // player reached score 2 - end of game!!
                if (newData.score[currentTeam] === 2) newData.status = 2;
            }
        }
    
        await setDoc(doc(db, "games", id), newData);
    }
    
    /**
     * Starting point to implement play action
     * @param row Row of card selected
     * @param col Column of card selected
     * */
    const play = async (row, col) => {
    
        let card = canPlay(row, col);
        if (!card) return;

        toggle();

        await executePlay(row, col, card);
    }
    
    async function initialCheck(newData) {
        const playerID = window.localStorage.getItem(id);
        await setData(newData);
        parseCurrentBoard(newData.currentBoard, newData.lastCardPlayed, newData['currentPlayer']['currentTeam'] === playerID);
        setLastCard(newData.lastCardPlayed);
        
        parseCurrentPlayerCards(newData.currentBoard, newData.currentCards[playerID]);
        
        if (newData.status === 2) endOfGame(newData)
        else setGameEnd(-1);
    }
    
    useEffect(() => {
        const playerID = window.localStorage.getItem(id);
        setMyPlayerID(playerID);
        
        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            initialCheck(doc.data()).then();
            toggle();
        });
        return () => unsubscribe()
    }, [])

    return (
        <div className={`main`}>
            {
                myPlayerID && data && data.currentCards ?
                    <div className={`game`}>
                        <GameBoard
                            board={board}
                            play={play}
                            canplay={myPlayerID === data.teams[data.currentTeam][data.currentPlayer[data.currentTeam]]}
                            gameEnd={gameEnd}
                        />
                        <BoardControl
                            scores={data.score}
                            players={data.players}
                            cards={data.currentCards}
                            remainingCards={data.remainingCards.length}
                            player={myPlayerID}
                            currentTeam={data.currentTeam}
                            teams={data.teams}
                            currentPlayer={data.currentPlayer}
                            lastCard={lastCard}
                            canplay={myPlayerID === data.teams[data.currentTeam][data.currentPlayer[data.currentTeam]]}
                            discardCard={discardCard}
                            gameEnd={gameEnd}
                            skipTeam={data.skipTeam}
                            reset={reStartGame}
                        />
                        <div className={`user-prompt`}>
                            {
                                showModal ? <Modal action={modal.action} modal={modal} setShowModal={setShowModal} /> : null
                            }
                        </div>
                    </div>
                : '' // TODO: Add loader until info is fetched
            }
        </div>
    )
}

export default Game;