import './App.css';
import React, {Component, useEffect} from "react";
import {Routes, Route, HashRouter} from 'react-router-dom';

import ControlContext from "./contexts/control-context";
import Game from "./components/game/game";
import Home from "./components/home/home";
import appRoutes from "./shared/appRoutes";
import db from "./index";
import JoinGame from "./components/join/joinGame";
import Rules from "./components/rules/rules";
import {Toaster} from "react-hot-toast";

class App extends Component {

    state = {
        board: undefined
    }

    constructor() {
        super();
        console.log('app starts');
    }

    componentDidMount() {

        // Runs when the component mounts. Similar to useEffect Hook, but for a Component style class.

        // db.collection("games").get().then(querySnapshot => {
        //     console.log(querySnapshot.docs.map(doc => doc.id)); // doc.id gives the ID
        //     // doc.data() returns the data.
        // })

    }

    render() {
        const {
            board,
        } = this.state;

        return (
            <React.Fragment>
                <Toaster/>
                <ControlContext.Provider
                    value={{
                        board
                    }}
                    >
                    <HashRouter>
                        <Routes>
                            <Route path={appRoutes.home} element={<JoinGame />}></Route>
                            <Route path={appRoutes.game} element={<Game />}></Route>
                            <Route path={appRoutes.gameWithID} element={<Game />}></Route>
                            <Route path={appRoutes.joinGame} element={<JoinGame />}></Route>
                            <Route path={appRoutes.rules} element={<Rules />}></Route>
                        </Routes>
                    </HashRouter>
                </ControlContext.Provider>
            </React.Fragment>
        )
    }
}

export default App;
