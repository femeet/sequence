import './boardControl.css';
import {face_cards_image} from "../../../shared/remaining_cards";
import {Suits} from "../../../shared/board";
import Deck from "../../../assets/images/deck.png";

import Delete from "../../../assets/icons/delete.png";
import {useState} from "react";
import {TeamMappings} from "../../../utils/constants";

const Card = (c) => {
    return (
        <div className={`player-card`}>
            {
                c.card.image ?
                    <img src={face_cards_image[c.card.number][c.card.suit]} className={`card-image`}
                         alt={c.card.suit}></img>
                    :
                    <div className={`content-wrapper`}>
                        <span className={c.card.suit + ` number top-left`}>{c.card.number}</span>
                        <span className={c.card.suit + ` number bottom-right`}>{c.card.number}</span>
                        <img src={Suits[c.card.suit]} className={`suit top`} alt={c.card.suit}></img>
                        <img src={Suits[c.card.suit]} className={`suit bottom`} alt={c.card.suit}></img>
                    </div>
            }
            {
                c.card.discard ?
                    <div className={`discard-wrapper`} onClick={() => c.discard(c.card)}>
                        <img src={Delete} className={`delete`} alt={c.card.suit}></img>
                    </div> : ''
            }
        </div>
    )
}

const BoardControl = (props) => {

    const [teamRedDropdown, setTeamRedDropdown] = useState(false);
    const [teamBlueDropdown, setTeamBlueDropdown] = useState(false);
    const [teamGreenDropDown, setTeamGreenDropdown] = useState(false);

    return (
        <div className={`control-wrapper`}>

            <div className={`turn-span`}>
                <p className={`turn ${props.canplay ? 'can-play' : ''} ${props.currentTeam === 0 ? 'red' : (props.currentTeam === 1 ? 'blue' : 'green')}`}>{
                    `${props.players[props.teams[props.currentTeam][props.currentPlayer[props.currentTeam]]]}'s Turn`
                }</p>
            </div>

            <div className={`current-cards`}>
                {
                    props.cards[props.player].map((card, id) => {
                        return (
                            <Card discard={props.discardCard} card={card} key={id}/>
                        )
                    })
                }
            </div>

            <div className={`bottom-section`}>
                {/* @MEET TODO: Add dropdown to indicate it's clickable*/}
                <div className={`score-wrapper ${props.gameEnd !== -1? `ended` : ``}`}>
                    {props.skipTeam !== 0 && <div className={`team team-red`} onClick={() => {
                        setTeamRedDropdown(!teamRedDropdown);
                    }}>
                        <div className={`name`}>
                            <span className={`team-name`}>Team Red<span className={"drop-down-arrow"}>{teamRedDropdown ? '▲' : '▼'}</span></span>
                            {
                                teamRedDropdown &&
                                <div className={'players'}>
                                    {
                                        props.teams[0].map((player) => {
                                            return <span className={`player`}>{props.players[player]} {props.player === player? ' (You)' : ""}</span>;
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <span className={`score`}>{props.scores[0]}</span>
                    </div>}
                    {props.skipTeam !== 1 && <div className={`team team-blue`} onClick={() => {
                        setTeamBlueDropdown(!teamBlueDropdown);
                    }}>
                        <div className={`name`}>
                            <span className={`team-name`}>Team Blue<span className={"drop-down-arrow"}>{teamBlueDropdown ? '▲' : '▼'}</span></span>
                            {
                                teamBlueDropdown &&
                                <div className={'players'}>
                                    {
                                        props.teams[1].map((player) => {
                                            return <span className={`player`}>{props.players[player]} {props.player === player? ' (You)' : ""}</span>;
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <span className={`score`}>{props.scores[1]}</span>
                    </div>}
                    {props.skipTeam !== 2 && <div className={`team team-green`} onClick={() => {
                        setTeamGreenDropdown(!teamGreenDropDown);
                    }}>
                        <div className={`name`}>
                            <span className={`team-name`}>Team Green<span className={"drop-down-arrow"}>{teamGreenDropDown ? '▲' : '▼'}</span></span>
                            {
                                teamGreenDropDown &&
                                <div className={'players'}>
                                    {
                                        props.teams[2].map((player) => {
                                            return <span className={`player`}>{props.players[player]} {props.player === player? ' (You)' : ""}</span>;
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <span className={`score`}>{props.scores[2]}</span>
                    </div>}
                </div>

                {
                    !(props.gameEnd !== -1)?
                        <div className={`deck-wrapper`}>
                            <div className={`pending`}>
                                <p className={`pending-cards`}>Remaining Cards in Deck</p>
                                <div className={`deck`}>
                                    <div className={`count`}>
                                        <span>{props.remainingCards}</span>
                                    </div>
                                    <img src={Deck} alt={`deck`}></img>
                                </div>
                            </div>
                            <div className={`pending`}>
                                <p className={`pending-cards`}>Last Card Played</p>
                                {
                                    props.lastCard ? <Card card={props.lastCard}/> : <div className={`deck`}></div>
                                }
                            </div>
                        </div>
                        :
                        <div className={`end-wrapper`}>
                            <h3>Game Over!!!</h3>
                            <p className={`message`}>
                                <span style={{color: TeamMappings[props.gameEnd]}}>Team {TeamMappings[props.gameEnd]}</span> won the game!<br/> Would you like a re-match?
                            </p>
                            <button onClick={() => props.reset()} className={`restart`}>Restart</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default BoardControl;