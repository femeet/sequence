import {Link} from "react-router-dom";
import appRoutes from "../../shared/appRoutes";

const Home = () => {
    return (
        <div className={`home`}>
            <h1>Home Page</h1>
            
            <Link to={appRoutes.game} >Start a Game</Link>
        </div>
    )
}

export default Home;