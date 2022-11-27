import './joinGame.css';
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../index";

const JoinGame = () => {

    const {id} = useParams();
    const [data, setData] = useState({});
    const [playerData, setPlayerData] = useState({});

    const [player2Joined, setPlayer2Joined] = useState(false);

    async function check_localStorage(newData) {

        // TODO: If status is 1 and user ID is either 1 or 2, navigate to game screen.

        await setData(newData);

        const gameID = window.localStorage.getItem("gameID");

        // TODO: Check if gameID in localStorage matches the params

        const playerID = window.localStorage.getItem("playerID");

        setPlayerData(newData["players"])

        if(playerID === null) {
            setPlayer2Joined(true);
        }
    }

    async function addPlayer() {
        window.localStorage.setItem("gameID", id);
        window.localStorage.setItem("playerID", "2");

        data["players"]["2"] = textRef.current.value;
        await setDoc(doc(db, "games", id), data, {merge: true});
        setPlayer2Joined(false);
    }

    useEffect(() => {
        // TODO: Check if ID from use params is Legit.

        const unsubscribe = onSnapshot(doc(db, "games", id), (doc) => {
            // TODO: Only proceed with checking if the status is 0.
            check_localStorage(doc.data());
        });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        return () => unsubscribe()

    }, [])

    const textRef = useRef();

    return (
        <div className="home">
            {player2Joined && <div className="create-game-div">
                <input type="text" ref={textRef} placeholder="Enter your name"/>
                <button onClick={() => {
                    addPlayer();
                }}>Join Game
                </button>
            </div>}
            {!player2Joined && <div>
                <strong>Share the link:</strong> {window.location.href}<br /><br />
                <span>DB Player Count: {data["players"] !== undefined ? Object.keys(data["players"]).length : "Loading..."}</span>
                <br /><br />
                <span>Your Name: {data["players"] !== undefined ? data["players"][window.localStorage.getItem("playerID")] : "Loading..."}</span></div>}
        </div>
    );

}

export default JoinGame;