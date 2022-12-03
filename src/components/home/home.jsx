import {useEffect, useRef} from "react";
import db from "../../index";
import {doc, setDoc} from "firebase/firestore";
import {remaining_cards} from "../../shared/remaining_cards";

import './home.css';
import {useNavigate, useParams} from "react-router-dom";

const Home = () => {

    const textRef = useRef();
    const navigator = useNavigate();
    
    /**
     * TODO: Bad code, review
     * */
    const ifIDthenNavigate = () => {
        const id = window.location.search.split("?id=")[1]
        if (id && id !== "") {
            navigator(`/joinGame/` + id)
        }
    }
    
    useEffect(() => {
        ifIDthenNavigate();
    })

    async function setupFirestore() {
        const userName = textRef.current.value;
        // TODO: Add validation for userName;

        let newGameDoc = {};
        let currentBoard = {};

        for (let i = 0; i < 10; i++) {
            var temp = [];
            for (let j = 0; j < 10; j++) {
                temp.push(0);
            }
            currentBoard[i] = temp;
        }

        newGameDoc['currentBoard'] = currentBoard;

        currentBoard = {};
        for (let i = 0; i < 10; i++) {
            var temp = [];
            for (let j = 0; j < 10; j++) {
                temp.push({
                    "scoreOfTeam": 0
                });
            }
            currentBoard[i] = temp;
        }

        newGameDoc['scoreMatrix'] = currentBoard;
        newGameDoc['status'] = 0;

        newGameDoc['players'] = {
            1: userName
        }

        // newGameDoc['remaining_cards'] = [...remaining_cards, ...remaining_cards];

        const gameID = Date.now().toString();

        let remainingCards = [...remaining_cards, ...remaining_cards];

        newGameDoc['gameID'] = gameID;
        newGameDoc['remainingCards'] = remainingCards;

        // Create a new game document in Firestore
        await setDoc(doc(db, "games", gameID), newGameDoc);

        // Save game ID, and player number in the localstorage
        // TODO: Change this structure and combine it. (Like a dictionary)
        window.localStorage.setItem("gameID", gameID);
        window.localStorage.setItem("playerID", 1);

        // TODO: Go to game screen with Status 0 (To wait for other players)
        navigator(`/joinGame/${gameID}`)
    }

    return (
        <div className='home'>
            <div className="create-game-div">
                <input type="text" ref={textRef} placeholder="Enter your name"/>
                <button onClick={() => {
                    setupFirestore();
                }}>Create a Game
                </button>
            </div>
        </div>
    )
}

export default Home;