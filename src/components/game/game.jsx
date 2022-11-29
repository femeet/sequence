import './game.css';
import GameBoard from "./board/board";
import BoardControl from "./boardControl/boardControl";
import {useEffect, useState} from "react";
import {doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../index";
import {useParams} from "react-router-dom";
import {Board} from "../../shared/board";

const Game = () => {
    
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [board, setBoard] = useState(Board);
    const [myPlayerID, setMyPlayerID] = useState(0);
    const [lastCard, setLastCard] = useState(null);
    
    const canPlay = (row, col) => {
        for (const card of data.currentCards[myPlayerID]) {
    
            // TODO: check for jack, handle jacks case!
            if (card.number === "J") continue;
            
            if (((card.position[0][0] === row && card.position[0][1] === col)
                || (card.position[1][0] === row && card.position[1][1] === col))
                && board[row][col].team === 0) return card;
        }
        return false;
    }
    
    const updateCurrentBoard = (row, col) => {
        let newBoard = data.currentBoard;
        newBoard[row][col] = myPlayerID;
        return newBoard;
    }
    
    const updateLocalBoard = (row, col) => {
        let localBoard = board;
        localBoard[row][col].team = myPlayerID;
        setBoard(localBoard);
    }
    
    const parseCurrentBoard = (currentBoard) => {
        let localBoard = board;
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                if (currentBoard[row][col] !== 0) localBoard[row][col].team = currentBoard[row][col];
            }
        }
        setBoard(localBoard);
    }
    
    const getCardIndex = (card) => {
        for (let i = 0; i < data.currentCards[myPlayerID].length; i++) {
            if (card.suit === data.currentCards[myPlayerID][i].suit &&
                card.number === data.currentCards[myPlayerID][i].number) {
                return i;
            }
        }
    }
    
    /**
     * Main method to implement play action
     * @param row Row of card selected
     * @param col Column of card selected
     * */
    const play = async (row, col) => {
    
        let card = canPlay(row, col);
        if (!card) return;
        let newData = {...data};
        
        newData.currentBoard = updateCurrentBoard(row, col);
    
        // TODO: Update Local Board
        updateLocalBoard(row, col); // is this required?
        
        let cardIndex = getCardIndex(card);
        const randomInt = Math.floor(Math.random() * data.remainingCards.length);
        newData.currentCards[myPlayerID][cardIndex] = data.remainingCards[randomInt];
        newData.remainingCards.splice(randomInt, 1); // removing new pop-ed card
        
        newData.lastCardPlayed = card;
        newData.currentPlayer = data.currentPlayer === 1 ? 2 : 1;
        
        // TODO: Check if score updated
        
        await setDoc(doc(db, "games", id), newData);
    }
    
    async function initialCheck(newData) {
        await setData(newData);
        const playerID = parseInt(window.localStorage.getItem("playerID"));
        
        parseCurrentBoard(newData.currentBoard);
        setLastCard(newData.lastCardPlayed);
        setMyPlayerID(playerID);
    }
    
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            initialCheck(doc.data()).then();
        });
        
        return () => unsubscribe()
    }, [])
    
    return (
        <div>
            {
                myPlayerID && data ?
                    <div className={`game`}>
                        <GameBoard
                            board={board}
                            play={play}
                            canplay={myPlayerID === data.currentPlayer}
                        />
                        <BoardControl
                            scores={data.score}
                            players={data.players}
                            cards={data.currentCards}
                            remainingCards={data.remainingCards.length}
                            player={myPlayerID}
                            currentPlayer={data.currentPlayer}
                            lastCard={lastCard}
                        />
                    </div>
                : '' // TODO: Add loader until info is fetched
            }
        </div>
    )
}

export default Game;