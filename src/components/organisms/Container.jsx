import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../molecules/Header";
import defaultTheme from "../../themes/default";
import ArticleListContainer from "../molecules/ArticleListContainer";

const Container = () => {
    return (
        <>
            <div className="App">
                <ThemeProvider theme={defaultTheme}>
                    <Header />
                    <ArticleListContainer />
                </ThemeProvider>
            </div>
        </>
    );
};

export default Container;
