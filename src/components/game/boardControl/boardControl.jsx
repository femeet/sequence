import './boardControl.css';
import {face_cards_image} from "../../../shared/remaining_cards";
import {Suits} from "../../../shared/board";

import Deck from "../../../assets/images/deck.png";
import RedCoin from "../../../assets/images/red-coin.png";
import BlueCoin from "../../../assets/images/blue-coin.png";

const Card = (c) => {
    return (
        <div className={`player-card`}>
            {
                c.card.image ?
                    <img src={face_cards_image[c.card.number][c.card.suit]} className={`card-image`} alt={c.card.suit}></img>
                    : 
                    <div className={`content-wrapper`}>
                        <span className={c.card.suit + ` number top-left`}>{c.card.number}</span>
                        <span className={c.card.suit + ` number bottom-right`}>{c.card.number}</span>
                        <img src={Suits[c.card.suit]} className={`suit top`} alt={c.card.suit}></img>
                        <img src={Suits[c.card.suit]} className={`suit bottom`} alt={c.card.suit}></img>
                    </div>
            }
        </div>
    )
}

const BoardControl = (props) => {
    return (
        <div className={`control-wrapper`}>
            <div className={`current-cards`}>
                {
                    props.cards[props.player].map((card, id) => {
                        return (
                            <Card card={card} key={id} />
                        )
                    })
                }
            </div>
            <div className={`deck-wrapper`}>
                <div className={`pending`}>
                    <div className={`deck`}>
                        <img src={Deck} alt={`deck`}></img>
                    </div>
                    <span className={`pending-cards`}>{props.remainingCards}</span>
                </div>
                <div className={`last-played`}>
                    <div className={`deck`}>
                        {/*<Card card={props.cards} />*/}
                    </div>
                </div>
            </div>
            
            <div className={`score-wrapper`}>
                <div className={`team team-1`}>
                    <div className={`left`}>
                        <img className={`coin`} src={RedCoin} />
                        <span className={`player`}>{props.players[1]}</span>
                    </div>
                    <span className={`score`}>{props.scores[1]}</span>
                </div>
                <div className={`team team-2`}>
                    <div className={`left`}>
                        <img src={BlueCoin} />
                        <span className={`player`}>{props.players[2]}</span>
                    </div>
                    <span className={`score`}>{props.scores[2]}</span>
                </div>
            </div>
        </div>
    )
}

export default BoardControl;