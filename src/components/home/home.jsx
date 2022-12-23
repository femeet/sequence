import {useRef} from "react";
import db from "../../index";
import {doc, setDoc} from "firebase/firestore";
import {remaining_cards} from "../../shared/remaining_cards";

import './home.css';
import {Link, useNavigate} from "react-router-dom";

import background from '../../assets/images/home_background.png';
import background2 from '../../assets/images/femeetbackground.jpg';

import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';
import toast from "react-hot-toast";


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
                temp.push(0);
            }
            currentBoard[i] = temp;
        }

        newGameDoc['currentBoard'] = currentBoard;

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
            <div className="ninety-height-div" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
                <span className="title">The Sequence Game</span><br/>
                <div className="name-wrapping-div-home"><input type="text" ref={textRef} placeholder="Enter your name" id="name-input-home"/>
                    <button className="create-game-button" onClick={() => {
                        setupFirestore();
                    }}>Create a Game
                    </button>
                </div>
            </div>
            <div className="developed-at" >
                Developed at&nbsp;<strong>Carnegie Mellon University</strong>
            </div>
            <div className="full-height-div" style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
                <h1 id="title">Meet The Devs:</h1>
                <div className="devs">
                    <div>
                        <a href={`https://femindharamshi.com/`}>
                            <img src="https://femindharamshi.com/static/media/favicon.df59357d43584154d3d1.png" alt={`Femin Dharamshi`}/>
                        </a>
                        <h2>Femin Dharamshi</h2>
                        <div className="links">
                            <a href={`https://www.youtube.com/c/FeminDharamshi`}><img src={youtube} alt={`Femin Youtube`}/></a>
                            <a href={`https://www.instagram.com/beyondhelloworld/`}><img src={instagram} alt={`Femin Instagram`}/></a>
                            <a href={`https://github.com/fdharamshi`}><img src={github} alt={`Femin Github`}/></a>
                            <a href={`https://www.linkedin.com/in/femindharamshi/`}><img src={linkedin} alt={`Femin LinkedIn`}/></a>
                        </div>
                    </div>
                    <div>
                        <a href={`https://meetshah.tech`}>
                            <img src="https://avatars.githubusercontent.com/u/26139149?v=4" alt={`Meet Shah`} />
                        </a>
                        <h2>Meet Shah</h2>
                        <div className="links">
                            <a href={`https://github.com/meetshah15`}><img src={github} alt={`Meet Github`}/></a>
                            <a href={`https://www.instagram.com/roaad_runner/`}><img src={instagram} alt={`Femin Instagram`}/></a>
                            <a href={`https://www.linkedin.com/in/meetshah15/`}><img src={linkedin} alt={`Meet LinkedIn`}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;