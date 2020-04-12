import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../molecules/Header";
import DataContext from "../../context/DataContext";
import defaultTheme from "../../themes/default";
import ArticleListContainer from "../molecules/ArticleListContainer";
import Button from "../atoms/Button";
import { LABEL_MORE_BTN } from "../../constants";

const Container = () => {
    const { state, dispatch } = React.useContext(DataContext);
    const loadMoreData = () => {
        dispatch({
            type: "SET_PAGE_NUM",
            payload: { pageNum: state.currentPageNum + 1 },
        });
    };

    return (
        <div className="App">
            <ThemeProvider theme={defaultTheme}>
                <Header />
                <ArticleListContainer />
                <Button
                    className="moreButton"
                    onCLickHandler={() => loadMoreData()}
                >
                    {LABEL_MORE_BTN}
                </Button>
            </ThemeProvider>
        </div>
    );
};

export default Container;
