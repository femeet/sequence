import './board.css';
import RedCoin from "../../../assets/images/red-coin.png";
import BlueCoin from "../../../assets/images/blue-coin.png";

const GameBoard = (props) => {
    return (
        <div className={`board-wrapper ${props.canplay ? `` : `no-play`}`}>
            {
                props.board.map((row, id) => {
                    return (
                        <div key={id} className={`card-row`}>
                            {
                                row.map((card, id2) => {
                                    return (
                                        <div className={`card`} key={id + id2} onClick={() => props.play(id, id2)}>
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
                                                {
                                                    card.team && card.team !== 0 ?
                                                        <div className={`coin`}>
                                                            <img alt={`coin`} src={card.team === 1 ? RedCoin : BlueCoin} />
                                                        </div>
                                                    : ''
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