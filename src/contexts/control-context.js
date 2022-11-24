import { createContext } from "react";

// create a context with default values
const controlContext = createContext({
    someFunction: () => {}
});

export default controlContext;
