import { createContext } from "react";

// create a context with default values
const controlContext = createContext({
    someFunction: () => {},
    cardClicked: () => {}
});

export default controlContext;
