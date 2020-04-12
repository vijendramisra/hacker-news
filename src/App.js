import React, { useEffect } from "react";
import DataContext from "../src/context/DataContext";
import reducer from "../src/reducers/reducer";
import Container from "../src/components/organisms/Container";
import Loader from "../src/components/atoms/Loader";
import { API_URL } from "../src/constants";
import "./App.css";

const initialState = {
    isLoading: true,
    isError: false,
    data: null,
    currentPageNum: 0,
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const getAPIQuery = (pageNum) => {
        return `query=foo&tags=story&page=${pageNum}`;
    };

    useEffect(() => {
        const fetchResponse = (pageNum) => {
            fetch(`${API_URL}${getAPIQuery(pageNum)}`)
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
        };

        dispatch({
            type: "FETCH_DATA_PENDING",
        });

        fetchResponse(state.currentPageNum);
    }, [state.currentPageNum]);

    return state.isLoading ? (
        <div className="loader-container">
            <Loader />
        </div>
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
