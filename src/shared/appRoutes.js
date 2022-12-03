const routes = {
    home: "/",
    homeDeployed: "/sequence",
    game: "/game", // TODO: Remove this later.
    gameWithID: "/game/:id",
    gameWithIDDeployed: "sequence/game/:id",
    joinGame: "/joinGame/:id",
    joinGameDeployed: "sequence/joinGame/:id"
};

export default routes;