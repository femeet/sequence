import './board.css';
import {Board} from "../../../shared/board";

const GameBoard = (props) => {
    return (
        <div className={`board-wrapper ${props.canplay ? `` : `no-play`}`}>
            {
                Board.map((row, id) => {
                    return (
                        <div key={id} className={`card-row`}>
                            {
                                row.map((card, id2) => {
                                    return (
                                        <div className={`card`} key={id + id2} onClick={() => props.play(id + 1, id2 + 1)}>
                                            <div className={`content`}>
                                                {
                                                    !card.image && !card.corner ?
                                                        <div className={`suit-wrapper`}>
                                                            <span className={card.suit + ` left suit`}></span>
                                                            <span className={card.suit + ` right suit`}></span>
                                                        </div>
                                                        : ''
                                                }
                                                {
                                                    card.number ?
                                                        <div className={`number-wrapper`}>
                                                            <span className={card.suit}>{card.number}</span>
                                                        </div>
                                                        : card.image ?
                                                            <img className={`face-card`} src={card.image}
                                                                 alt={card.suit}/> : ''
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GameBoard;