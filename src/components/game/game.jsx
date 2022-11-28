import './game.css';
import GameBoard from "./board/board";
import BoardControl from "./boardControl/boardControl";
import {useEffect, useState} from "react";
import {doc, onSnapshot} from "firebase/firestore";
import db from "../../index";
import {useParams} from "react-router-dom";

const Game = () => {
    
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [myPlayerID, setMyPlayerID] = useState("0");
    
    const canPlay = () => {
        return true;
    }
    
    const updateCurrentBoard = () => {
    
    }
    
    /**
     * Main method to implement play action
     * @param row Row of card selected
     * @param col Column of card selected
     * */
    const play = (row, col) => {
        
        console.log('card clicked: ' + row + ' ' + col);
        
        // TODO: check if can play
        if (!canPlay()) return;
        
        // TODO: Update Current Board
        updateCurrentBoard();
        
        // TODO: Replace played card with new card, Update Remaining Cards
        // TODO: Update turn
        // TODO: Check if score updated
    }
    
    async function initialCheck(newData) {
        await setData(newData);
        const playerID = window.localStorage.getItem("playerID");
        
        setMyPlayerID(playerID);
    }
    
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            initialCheck(doc.data())
        });
        
        return () => unsubscribe()
    }, [])
    
    return (
        <div>
            {
                myPlayerID && data ?
                    <div className={`game`}>
                        <GameBoard
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
                        />
                    </div>
                : '' // TODO: Add loader until info is fetched
            }
        </div>
    )
}

export default Game;