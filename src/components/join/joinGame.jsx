import './joinGame.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../index";
import copy from '../../assets/copy.png';
import toast from "react-hot-toast";
import background from "../../assets/images/home_background.png";

const JoinGame = () => {

    const {id} = useParams();

    const [data, setData] = useState(null);

    const [myPlayerID, setMyPlayerID] = useState("");

    const [newPlayer, setNewPlayer] = useState(false);

    const [startDisabled, setStartDisabled] = useState(true);

    const [myCurrentTeam, setMyCurrentTeam] = useState(3);

    const navigate = useNavigate();
    //
    // async function start_game() {
    //
    //     // Done: Run only if two players exist
    //     if(Object.keys(data["players"]).length < 2) {
    //         return;
    //     }
    //
    //     // Allocate n cards to each player (update Firestore)
    //     let n = 6;
    //     var tempData = {...data};
    //     var currentCards = {}
    //     for(let i = 1; i <= Object.keys(data["players"]).length; i ++) {
    //         currentCards[i.toString()] = []
    //         for(let j = 0; j < n; j++) {
    //             const randomInt = Math.floor(Math.random() * tempData['remainingCards'].length);
    //             currentCards[i.toString()].push(tempData['remainingCards'][randomInt]);
    //             tempData['remainingCards'].splice(randomInt, 1);
    //         }
    //     }
    //     tempData["currentCards"] = currentCards;
    //
    //     // Done: Change status of game to 1
    //     tempData["status"] = 1
    //     tempData["currentPlayer"] = 1
    //
    //     tempData["score"] = {
    //         1: 0,
    //         2: 0
    //     }
    //
    //     // Done: Update Firebase
    //     await setDoc(doc(db, "games", id), tempData);
    //     // alert("Firestore updated. Game Started.");
    //
    //     // Done: Navigate to board page
    //     navigate(`/game/${id}`)
    // }
    //
    function checkIfEqualPlayers() {
        // Function to get if all teams have equal number of players.
        if(data != null) {
            let length1 = data['teams'][0].length;
            let length2 = data['teams'][1].length;
            let length3 = data['teams'][2].length;
            let lobbyLength = data['teams'][3].length;

            if(lobbyLength > 0) {
                return false;
            }

            if( (length1 === 0 && length2 === 0) ||  (length2 === 0 && length2 === 3) || (length1 === 0 && length3 === 0)) {
                return false;
            }

            return (length1 === 0 && length2 === length3) || (length2 === 0 && length1 === length3) || (length3 === 0 && length1 === length2) || (length1 === length2 && length2 === length3);

        } else {
            return false;
        }
    }

    async function changeTeam(newTeam) {

        if (myCurrentTeam != newTeam) {
            let teams = data['teams'];
            teams[newTeam].push(myPlayerID);
            teams[myCurrentTeam] = data["teams"][myCurrentTeam].filter(function(item) {
                return item !== myPlayerID
            })

            data['teams'] = teams;
            await setDoc(doc(db, "games", id), data);
        }

    }

    async function initialCheck(newData) {

        // TODO: If status is 1 and user ID is either 1 or 2, navigate to game screen.

        await setData(newData);

        const gameID = id;
        const playerID = window.localStorage.getItem(gameID);

        if(newData["status"] === 1 && playerID != null) {
            navigate(`/game/${id}`)
        }

        if(playerID != null) {
            setMyPlayerID(playerID);
            setNewPlayer(false);

            // Find player's current team
            for(let key = 0; key < 3; key ++) {
                newData['teams'][key].forEach(player => {
                    if(player === playerID) {
                        setMyCurrentTeam(key);
                        console.log("Found at "+ key);
                    }
                })
            }
        } else {
            setNewPlayer(true);
        }

        // if (isNaN(playerID) && Object.keys(newData["players"]).length === 1) {
        //     setPlayer2Joined(true);
        // }

        // if(Object.keys(newData["players"]).length > 1) {
        //     setStartDisabled(false);
        // }
    }

    async function addPlayer() {
        // Randomly generate a 6 digit hex for player ID
        let playerID = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toString();

        window.localStorage.setItem(id.toString(), playerID);
        data['players'][playerID] = textRef.current.value;
        data['teams'][3].push(playerID);
        await setDoc(doc(db, "games", id), data);
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
    //
    const textRef = useRef();

    const shareUI = () => {
        return (<>
            <div className="share-ui-content">
                Share Game Link:
                <div className="join-game-link">
                    <span className={`link`}>{window.location.href}</span>
                    <img src={copy} alt={"copy-icon"} onClick={()=>{navigator.clipboard.writeText(window.location.href).then(r => toast.success("Copied to Clipboard"))}} width="20px" height="20px"/>
                </div>

                {myCurrentTeam === 3 && <div className="message">
                    Please Join A Team
                </div>}

                <div className="player">
                    <div className="header" style={{backgroundColor: "#2d3436"}}>Lobby</div>
                    <div className="team-contents">
                        {
                            data != null && data["teams"][3].length > 0 && data["teams"][3].map(playerID => {
                                return <span>{data['players'][playerID]}</span>
                            })
                        }
                        {
                            (data == null || data["teams"][3].length === 0) && <span className="no-player">Lobby Empty</span>
                        }
                    </div>
                </div>

                <div className="teams">
                    <div className="player" onClick={()=>{changeTeam(0)}}>
                        <div className="header" style={{backgroundColor: "#c0392b"}}>Team Red</div>
                        <div className="team-contents">
                            {
                                data != null &&  data["teams"][0].length > 0 && data["teams"][0].map(playerID => {
                                return <span>{data['players'][playerID]}</span>
                                })
                            }
                            {
                                (data == null || data["teams"][0].length === 0) && <span className="no-player">No Players Yet</span>
                            }
                        </div>
                    </div>
                    <div className="player" onClick={()=>{changeTeam(1)}}>
                        <div className="header" style={{backgroundColor: "#2980b9"}}>Team Blue</div>
                        <div className="team-contents">
                            {
                                data != null && data["teams"][1].length > 0 && data["teams"][1].map(playerID => {
                                    return <span>{data['players'][playerID]}</span>
                                })
                            }
                            {
                                (data == null || data["teams"][1].length === 0) && <span className="no-player">No Players Yet</span>
                            }
                        </div>
                    </div>
                    <div className="player" onClick={()=>{changeTeam(2)}}>
                        <div className="header" style={{backgroundColor: "#27ae60"}}>Team Green</div>
                        <div className="team-contents">
                            {
                                data != null && data["teams"][2].length > 0 && data["teams"][2].map(playerID => {
                                    return <span>{data['players'][playerID]}</span>
                                })
                            }
                            {
                                (data == null || data["teams"][2].length === 0) && <span className="no-player">No Players Yet</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="message">
                    { data["gameCreator"] !== myPlayerID && `Please wait for ${data['players'][data['gameCreator']]} to start the game`}
                    { data["gameCreator"] === myPlayerID && <button className="start-game-button" disabled={!checkIfEqualPlayers()}>Start Game</button>}
                </div>
            </div>
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
        <div className="jg-main" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <div className="jg-wrapper-div">

                {data != null && !newPlayer && shareUI()}
                {newPlayer && secondPlayerNameUI()}

            </div>
        </div>
    );

}

export default JoinGame;