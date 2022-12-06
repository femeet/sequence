import {remaining_cards} from "../shared/remaining_cards";
import {doc, setDoc} from "firebase/firestore";
import db from "../index";

const resetGame = async (gameID) => {
    
    let newGameDoc = {};

    // Current Board
    let currentBoard = {};

    for (let i = 0; i < 10; i++) {
        let temp = [];
        for (let j = 0; j < 10; j++) {
            temp.push(0);
        }
        currentBoard[i] = temp;
    }

    newGameDoc['currentBoard'] = currentBoard;

    // Status
    newGameDoc['status'] = 1;

    // Players - Let players be the same

    // Remaining Cards
    newGameDoc['remainingCards'] = [...remaining_cards, ...remaining_cards];

    // lastCardPlayed
    newGameDoc["lastCardPlayed"] = null;

    // Score
    newGameDoc["score"] = {
        1: 0,
        2: 0
    }

    // Score Matrix
    currentBoard = {};
    for (let i = 0; i < 10; i++) {
        let temp = [];
        for (let j = 0; j < 10; j++) {
            temp.push({
                "scoreOfTeam": 0
            });
        }
        currentBoard[i] = temp;
    }

    newGameDoc['scoreMatrix'] = currentBoard;

    // Current PLayer
    newGameDoc["currentPlayer"] = 1

    // Current Cards
    let n = 6;
    let currentCards = {}
    for(let i = 1; i <= 2; i ++) {
        currentCards[i.toString()] = []
        for(let j = 0; j < n; j++) {
            const randomInt = Math.floor(Math.random() * newGameDoc['remainingCards'].length);
            currentCards[i.toString()].push(newGameDoc['remainingCards'][randomInt]);
            newGameDoc['remainingCards'].splice(randomInt, 1);
        }
    }
    newGameDoc["currentCards"] = currentCards;

    await setDoc(doc(db, "games", gameID), newGameDoc, {merge: true});
}

export default resetGame;