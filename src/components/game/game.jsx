import './game.css';
import SequenceBoard from "./board/board";
import GameDetails from "./gameDetails/gameDetails";

const Game = () => {
    return (
        <div>
            <div className={`game`}>
                <SequenceBoard />
                <GameDetails />
            </div>
        </div>
    )
}

export default Game;