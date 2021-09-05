import React from "react";

const MinContext = React.createContext(50);
// const minTester = React.useContext(MinContext);
// const [min, setMin] = React.useState(minTester); cant use hooks outside of a func


const useMinContext = () => {
    // const [min, setMin] = React.useContext(MinContext); //cant deconstruct this?
    // const min = React.useContext(MinContext);
    const handleMin = (value) => {
        //for reassigning min value.
        // should maybe be UseState not useContext?
        setMin(value)
    };
    return {value:min, onChange:handleMin};
};

const MinProvider = ({ children }) => {
    const minTester = React.useContext(MinContext);
    const [min, setMin] = React.useState(minTester);
    return (
        <MinContext.Provider value={min, setMin}>
            {children}
        </MinContext.Provider>
    )
}

export { MinProvider, useMinContext };