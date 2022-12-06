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

const Game = () => {
    
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [board, setBoard] = useState(Board);
    const [myPlayerID, setMyPlayerID] = useState(0);
    const [lastCard, setLastCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState(null);
    const [gameEnd, setGameEnd] = useState(0);
    
    const canPlay = (row, col) => {
        
        // first play the card if it exists
        for (const card of data.currentCards[myPlayerID]) {
    
            if (card.number === "J") continue;
        
            if (((card.position[0][0] === row && card.position[0][1] === col)
                || (card.position[1][0] === row && card.position[1][1] === col))
                && board[row][col].team === 0) return card;
        }
    
        // check if jack exists
        for (const card of data.currentCards[myPlayerID]) {
            if (card.number === "J") {
                if ((card.suit === 'diamond' || card.suit === 'club') && board[row][col].team === 0) {
                    // valid two-eyed jack attempt
                    setModal({
                        row: row,
                        col: col,
                        card: card,
                        action: executePlay,
                        message: 'Are you sure you want to use Two-Eyed Jack?'
                    })
                    setShowModal(true);
                } else if (board[row][col].team !== 0 && board[row][col].team !== myPlayerID) {
                    // one-eyed jack
                    if (data.scoreMatrix[row][col].scoreOfTeam !== 0) {
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
        if (currentPlayer) {
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
                if (currentBoard[card.position[0][0]][card.position[0][1]] !== 0
                    && currentBoard[card.position[1][0]][card.position[1][1]]) {
                    card.discard = true;
                    console.log(card);
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
    
    const endOfGame = (data) => {
        const winnerId = data.score[0] > data.score[1] ? 0 : 1;
        setGameEnd(winnerId);
    }
    
    const reStartGame = async () => {
        await resetGame(id);
    }
    
    /**
     * Main method to implement play action
     * @param row Row of card selected
     * @param col Column of card selected
     * @param card Contains the card to be played
     * */
    const executePlay = async (row, col, card) => {
        let newData = {...data};
    
        if (card.oneEyed) {
            // remove opponent's card from board
            newData.currentBoard = updateCurrentBoard(row, col, 0);
            updateLocalBoard(row, col, 0); // is this required?
        } else {
            newData.currentBoard = updateCurrentBoard(row, col, myPlayerID);
            updateLocalBoard(row, col, myPlayerID); // is this required?
        }
    
        let cardIndex = getCardIndex(card);
        const randomInt = Math.floor(Math.random() * data.remainingCards.length);
        newData.currentCards[myPlayerID][cardIndex] = data.remainingCards[randomInt];
        newData.remainingCards.splice(randomInt, 1); // removing new pop-ed card
    
        newData.lastCardPlayed = card;
        newData.lastCardPlayed.row = row;
        newData.lastCardPlayed.col = col
        newData.currentPlayer = data.currentPlayer === 1 ? 2 : 1;
        
        let result = checkForScore(data, row, col, myPlayerID);
        if (result) {
            result.indexes.forEach(index => {
            
                // TODO: Do not change for corners!!!
                newData.scoreMatrix[index.x][index.y] = {
                    "scoreOfTeam": myPlayerID,
                    "direction": result.direction
                }
            })
        
            newData.scoreMatrix[row][col] = {
                "scoreOfTeam": myPlayerID,
                "direction": result.direction
            }
        
            newData.score[myPlayerID] = newData.score[myPlayerID] + 1;
            
            // player reached score 2 - end of game!!
            if (newData.score[myPlayerID] === 2) newData.status = 2;
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
        
        await executePlay(row, col, card);
    }
    
    async function initialCheck(newData) {
        const playerID = parseInt(window.localStorage.getItem("playerID"));
        await setData(newData);
        parseCurrentBoard(newData.currentBoard, newData.lastCardPlayed, newData.currentPlayer === playerID);
        setLastCard(newData.lastCardPlayed);
        
        parseCurrentPlayerCards(newData.currentBoard, newData.currentCards[playerID]);
        
        if (newData.status === 2) endOfGame(newData);
    }
    
    useEffect(() => {
        const playerID = parseInt(window.localStorage.getItem("playerID"));
        setMyPlayerID(playerID);
        
        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            initialCheck(doc.data()).then();
        });
        return () => unsubscribe()
    }, [])
    
    return (
        <div className={`main`}>
            {
                myPlayerID && data ?
                    <div className={`game`}>
                        <GameBoard
                            board={board}
                            play={play}
                            canplay={myPlayerID === data.currentPlayer}
                            gameEnd={gameEnd}
                        />
                        <BoardControl
                            scores={data.score}
                            players={data.players}
                            cards={data.currentCards}
                            remainingCards={data.remainingCards.length}
                            player={myPlayerID}
                            currentPlayer={data.currentPlayer}
                            lastCard={lastCard}
                            canplay={myPlayerID === data.currentPlayer}
                            discardCard={discardCard}
                            gameEnd={gameEnd}
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