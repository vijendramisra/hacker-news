import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../molecules/Header";
import defaultTheme from "../../themes/default";
import ArticleListContainer from "../molecules/ArticleListContainer";
import Button from "../atoms/Button";
import { LABEL_MORE_BTN } from "../../constants";

const Container = () => {
    return (
        <>
            <div className="App">
                <ThemeProvider theme={defaultTheme}>
                    <Header />
                    <ArticleListContainer />
                    <Button className="moreButton">{LABEL_MORE_BTN}</Button>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Container;
