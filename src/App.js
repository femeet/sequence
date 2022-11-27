import './App.css';
import React, { Component, useEffect } from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import ControlContext from "./contexts/control-context";
import Game from "./components/game/game";
import Home from "./components/home/home";
import appRoutes from "./shared/appRoutes";
import db from "./index";
import JoinGame from "./components/join/joinGame";

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
                <ControlContext.Provider
                    value={{
                        board
                    }}
                    >
                    <BrowserRouter>
                        <Routes>
                            <Route path={appRoutes.home} element={<Home />}></Route>
                            <Route path={appRoutes.game} element={<Game />}></Route>
                            <Route path={appRoutes.joinGame} element={<JoinGame />}></Route>
                        </Routes>
                    </BrowserRouter>
                </ControlContext.Provider>
            </React.Fragment>
        )
    }
}

export default App;
