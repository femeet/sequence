import './App.css';
import React, { Component } from "react";
import {Routes, Route, BrowserRouter, useNavigate, useParams} from 'react-router-dom';

import ControlContext from "./contexts/control-context";
import Game from "./components/game/game";
import Home from "./components/home/home";
import appRoutes from "./shared/appRoutes";
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
                            <Route path={appRoutes.homeDeployed} element={<Home />}></Route>
                            <Route path={appRoutes.game} element={<Game />}></Route>
                            <Route path={appRoutes.gameWithID} element={<Game />}></Route>
                            <Route path={appRoutes.gameWithIDDeployed} element={<Game />}></Route>
                            <Route path={appRoutes.joinGame} element={<JoinGame />}></Route>
                            <Route path={appRoutes.joinGameDeployed} element={<JoinGame />}></Route>
                        </Routes>
                    </BrowserRouter>
                </ControlContext.Provider>
            </React.Fragment>
        )
    }
}

export default App;
