import React, { useEffect } from "react";
import DataContext from "../src/context/DataContext";
import reducer from "../src/reducers/reducer";
import Container from "../src/components/organisms/Container";
import Loader from "../src/components/atoms/Loader";
import "./App.css";

const initialState = {
    isLoading: true,
    isError: false,
    data: null,
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: "FETCH_DATA_PENDING",
        });
        fetch("//hn.algolia.com/api/v1/search?query=foo&tags=story")
            .then((res) => res.json())
            .then(
                (results) => {
                    dispatch({
                        type: "SET_DATA",
                        payload: results,
                    });
                    dispatch({
                        type: "FETCH_DATA_COMPLETE",
                    });
                },
                (error) => {
                    dispatch({
                        type: "SET_ERROR",
                    });
                }
            );
    }, []);
    return state.isLoading ? (
        <Loader />
    ) : (
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
