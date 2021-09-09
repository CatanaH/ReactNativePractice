import React from "react";

const MinContext = React.createContext(null);
const MaxContext = React.createContext(null);
const IsMinOnContext = React.createContext(null);
const IsMaxOnContext = React.createContext(null);

const MinProvider = ({ children }) => {
    const [min, setMin] = React.useState(10);
    return (
        <MinContext.Provider value={[min, setMin]}>
            {children}
        </MinContext.Provider>
    )
}
const MaxProvider = ({ children }) => {
    const [max, setMax] = React.useState(50);
    return (
        <MaxContext.Provider value={[max, setMax]}>
            {children}
        </MaxContext.Provider>
    )
}
const IsMinOnProvider = ({ children }) => {
    const [isMinOn, setIsMinOn] = React.useState(true);
    return (
        <IsMinOnContext.Provider value={[isMinOn, setIsMinOn]}>
            {children}
        </IsMinOnContext.Provider>
    )
}
const IsMaxOnProvider = ({ children }) => {
    const [isMaxOn, setIsMaxOn] = React.useState(true);
    return (
        <IsMaxOnContext.Provider value={[isMaxOn, setIsMaxOn]}>
            {children}
        </IsMaxOnContext.Provider>
    )
}



export { MinProvider, MinContext, MaxProvider, MaxContext, IsMinOnProvider, IsMinOnContext, IsMaxOnProvider, IsMaxOnContext };