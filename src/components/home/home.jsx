import {useRef} from "react";
import db from "../../index";
import {doc, setDoc} from "firebase/firestore";
import {remaining_cards} from "../../shared/remaining_cards";

import './home.css';
import {useNavigate} from "react-router-dom";

import background from '../../assets/images/home_background.png';

import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';


const Home = () => {

    const textRef = useRef();
    const navigator = useNavigate();

    async function setupFirestore() {
        const userName = textRef.current.value;
        // TODO: Add validation for userName;

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
            <div className="full-height-div" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
                <span className="title">The Sequence Game</span><br/>
                <input type="text" ref={textRef} placeholder="Enter your name" id="name-input-home"/><br/>
            </div>
           <div className="full-height-div">
               <h1 id="title">Sequence Game Online</h1>
               <div className="create-game-div">
                   <h2>Create a New Game</h2>
                   <div style={{flex:1}}></div>
                   <input type="text" ref={textRef} placeholder="Enter your name"/><br/>
                   <button onClick={() => {
                       setupFirestore();
                   }}>Create a Game
                   </button>
                   <div style={{flex:1}}></div>
               </div>
           </div>
            <div className="full-height-div" style={{background:"#34495e"}}>
                <h1 id="title">Meet The Devs:</h1>
                <div className="devs">
                    <div>
                        <img src="https://femindharamshi.com/static/media/favicon.df59357d43584154d3d1.png"/>
                        <h2>Femin Dharamshi</h2>
                        <h4>Carnegie Mellon University</h4>
                        <div className="links">
                            <img src={youtube}/>
                            <img src={instagram}/>
                            <img src={github}/>
                            <img src={linkedin}/>
                        </div>
                    </div>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/26139149?v=4" />
                        <h2>Meet Shah</h2>
                        <h4>Carnegie Mellon University</h4>
                        <div className="links">
                            <img src={youtube}/>
                            <img src={instagram}/>
                            <img src={github}/>
                            <img src={linkedin}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;