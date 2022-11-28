import './joinGame.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../index";
import copy from '../../assets/copy.png';

const JoinGame = () => {

    const {id} = useParams();
    const [data, setData] = useState(null);

    const [player2Joined, setPlayer2Joined] = useState(false);

    const [myPlayerID, setMyPlayerID] = useState("0");

    const [startDisabled, setStartDisabled] = useState(true);

    const navigator = useNavigate();

    async function start_game() {

        // Done: Run only if two players exist
        if(Object.keys(data["players"]).length < 2) {
            return;
        }

        // TODO: Allocate n cards to each player (update Firestore)
        var tempData = {...data};
        var currentCards = {}
        for(let i = 1; i <= Object.keys(data["players"]).length; i ++) {
            currentCards[i.toString()] = []
            for(let j = 0; j < 6; j++) {
                const randomInt = Math.floor(Math.random() * tempData['remainingCards'].length);
                currentCards[i.toString()].push(tempData['remainingCards'][randomInt]);
                tempData['remainingCards'].splice(randomInt, 1);
            }
        }
        tempData["currentCards"] = currentCards;

        // Done: Change status of game to 1
        tempData["status"] = 1

        // Done: Update Firebase
        await setDoc(doc(db, "games", id), tempData);
        alert("Firestore updated. Game Started.");

        // Done: Navigate to board page
        navigator(`/game/${id}`)
    }

    async function initialCheck(newData) {

        // TODO: If status is 1 and user ID is either 1 or 2, navigate to game screen.

        await setData(newData);

        const gameID = window.localStorage.getItem("gameID");
        const playerID = window.localStorage.getItem("playerID");

        if(gameID !== id) {
            window.localStorage.clear();
        }

        setMyPlayerID(playerID);

        if (playerID === null && Object.keys(newData["players"]).length === 1) {
            setPlayer2Joined(true);
        }

        if(Object.keys(newData["players"]).length > 1) {
            setStartDisabled(false);
        }
    }

    async function addPlayer() {
        window.localStorage.setItem("gameID", id);
        window.localStorage.setItem("playerID", "2");

        data["players"]["2"] = textRef.current.value;
        await setDoc(doc(db, "games", id), data);
        setPlayer2Joined(false);
    }

    useEffect(() => {
        // TODO: Check if ID from use params is Legit.
        // TODO: Erase local storage ID is mismatch

        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            // TODO: Only proceed with checking if the status is 0.
            initialCheck(doc.data());
        });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        return () => unsubscribe()

    }, [])

    const textRef = useRef();

    const shareUI = () => {
        return (<>
            <div className="jg-link-div">
                Share Game Link:
                <div className="jg-link">
                    {window.location.href}
                    <img src={copy} alt={"copy-icon"} width="20px" height="20px"/>
                </div>
            </div>

            <div className="players-div">

                <div className="player1" style={{border: "2px solid red"}}>
                    <div style={{fontWeight: "bolder", width: "100%", fontSize: "x-large"}}>Player 1</div>
                    {data["players"]["1"]}
                    {myPlayerID === "1" && " (You)"}
                </div>

                <div className="player1" style={{border: "2px solid blue"}}>
                    <div style={{fontWeight: "bolder", width: "100%", fontSize: "x-large"}}>Player 2</div>
                    {Object.keys(data["players"]).length > 1 ? data["players"]["2"] : "Waiting..."}
                    {myPlayerID === "2" && " (You)"}
                </div>

            </div>

            <button className="start-game-btn" disabled={startDisabled} onClick={()=>{start_game()}}>Start Game</button>
        </>);
    }

    const secondPlayerNameUI = () => {
        return (<>
            <div className="second-player-name-div">
                <div>Enter Your Name:</div>
                <input type="text" ref={textRef} placeholder={"Name"}/>
                <button onClick={() => {addPlayer();}}>Join Game</button>
            </div>
        </>);
    }

    return (
        <div className="jg-main">
            <div className="jg-wrapper-div">

                {data != null && !player2Joined && shareUI()}
                {player2Joined && secondPlayerNameUI()}

            </div>
        </div>
    );

}

export default JoinGame;