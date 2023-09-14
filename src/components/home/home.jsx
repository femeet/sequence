import { useRef } from "react";
import db from "../../index";
import { doc, setDoc } from "firebase/firestore";
import { remaining_cards } from "../../shared/remaining_cards";

import './home.css';
import { Link, useNavigate } from "react-router-dom";

import background from '../../assets/images/home_background.png';
import background2 from '../../assets/images/femeetbackground.jpg';
import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';

const Home = () => {

    const textRef = useRef();
    const navigator = useNavigate();

    async function setupFirestore() {
        const userName = textRef.current.value;

        // if(userName.length() === 0) {
        //     toast.error("Please enter your name");
        //     return;
        // }

        let newGameDoc = {};
        let currentBoard = {};

        for (let i = 0; i < 10; i++) {
            let temp = [];
            for (let j = 0; j < 10; j++) {
                temp.push(-1);
            }
            currentBoard[i] = temp;
        }

        newGameDoc['currentBoard'] = currentBoard;

        currentBoard = {};
        for (let i = 0; i < 10; i++) {
            let temp = [];
            for (let j = 0; j < 10; j++) {
                temp.push({
                    "scoreOfTeam": -1
                });
            }
            currentBoard[i] = temp;
        }

        newGameDoc['scoreMatrix'] = currentBoard;
        newGameDoc['status'] = 0;

        // Randomly generate a 6 digit hex for player ID
        let playerID = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toString();

        newGameDoc['players'] = {
            [playerID]: userName
        }

        newGameDoc['teams'] = {
            0: [],
            1: [],
            2: [],
            3: [playerID] // 3 means that player hasn't chosen a team yet
        }

        newGameDoc['gameCreator'] = playerID;


        // newGameDoc['remaining_cards'] = [...remaining_cards, ...remaining_cards];

        const gameID = Date.now().toString();

        let remainingCards = [...remaining_cards, ...remaining_cards];

        newGameDoc['gameID'] = gameID;
        newGameDoc['remainingCards'] = remainingCards;

        // Create a new game document in Firestore
        await setDoc(doc(db, "games", gameID), newGameDoc);

        // Save game ID, and player number in the localstorage
        // Done: Change this structure and combine it. (Like a dictionary)
        window.localStorage.setItem(gameID.toString(), playerID);
        // window.localStorage.setItem("playerID", 1);

        navigator(`/joinGame/${gameID}`)
    }

    return (
        <div className='home'>
            <div className="ninety-height-div" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <h1 className="title">The Sequence Game</h1>
                <div className="name-wrapping-div-home">
                    <input className="box-wrapper" type="text" ref={textRef} placeholder="Enter your name" id="name-input-home" />
                    <button className="box-wrapper create-game-button" onClick={() => {
                        setupFirestore();
                    }}>Create a Game
                    </button>
                </div>
            </div>
            <div className="developed-at" >
                <p>Developed at <span className={`bold`}>Carnegie Mellon University</span></p>
            </div>
            <div className="full-height-div" style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <h1 id="title">Meet The Devs</h1>
                <div className="devs">
                    <div className={`dev1`}>
                        <a href={`https://femindharamshi.com/`}>
                            <img src="https://femindharamshi.com/static/media/favicon.df59357d43584154d3d1.png" alt={`Femin Dharamshi`} />
                        </a>
                        <h2>Femin Dharamshi</h2>
                        <div className="links">
                            <a href={`https://www.youtube.com/c/FeminDharamshi`}><img src={youtube} alt={`Femin Youtube`} /></a>
                            <a href={`https://www.instagram.com/beyondhelloworld/`}><img src={instagram} alt={`Femin Instagram`} /></a>
                            <a href={`https://github.com/fdharamshi`}><img src={github} alt={`Femin Github`} /></a>
                            <a href={`https://www.linkedin.com/in/femindharamshi/`}><img src={linkedin} alt={`Femin LinkedIn`} /></a>
                        </div>
                    </div>
                    <div className={`dev2`}>
                        <a href={`https://meetshah.tech`}>
                            <img src="https://avatars.githubusercontent.com/u/26139149?v=4" alt={`Meet Shah`} />
                        </a>
                        <h2>Meet Shah</h2>
                        <div className="links">
                            <a href={`https://github.com/meetshah15`}><img src={github} alt={`Meet Github`} /></a>
                            <a href={`https://www.instagram.com/roaad_runner/`}><img src={instagram} alt={`Femin Instagram`} /></a>
                            <a href={`https://www.linkedin.com/in/meetshah15/`}><img src={linkedin} alt={`Meet LinkedIn`} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;