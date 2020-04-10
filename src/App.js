import React, { useEffect } from "react";
import DataContext from "../src/context/DataContext";
import reducer from "../src/reducers/reducer";
import Container from "../src/components/organisms/Container";
import "./App.css";

const initialState = {
    isLoading: false,
    isError: false,
    data: null,
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    useEffect(() => {
        fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
            .then((res) => res.json())
            .then(
                (results) => {
                    dispatch({
                        type: "SET_DATA",
                        payload: results,
                    });
                },
                (error) => {
                    dispatch({
                        type: "SET_ERROR",
                        payload: { isError: true },
                    });
                }
            );
    }, []);
    return (
        <DataContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            <Container />
        </DataContext.Provider>
    );
}

export default App;
