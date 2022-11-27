import './game.css';
import Board from "../../shared/board";

const Game = () => {
    return (
        <div>
            <div className={`board`}>
                <div className={`board-wrapper`}>
                    {
                        Board.map((row, id) => {
                            return (
                                <div key={id} className={`card-row`}>
                                    {
                                        row.map((card, id2) => {
                                            return (
                                                <div className={`card`} key={id + id2}>
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
            </div>

        </div>
    )
}

export default Game;