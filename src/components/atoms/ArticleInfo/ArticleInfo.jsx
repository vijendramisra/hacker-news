import React from "react";
import StyledArticleInfo from "./ArticleInfo.style";
import DataContext from "../../../context/DataContext";
import Button from "../Button";
import { LABEL_AUTHOR_BY, LABEL_HIDE_BTN } from "../../../constants";

const ArticleInfo = ({ url, title, domain, author, time, objectID }) => {
    const { state, dispatch } = React.useContext(DataContext);

    const setItemInStorage = () => {
        let articleData = [];
        const retrievedData = localStorage.getItem("articleData");

        const retrievedObject = JSON.parse(retrievedData) || [];
        articleData = [
            ...retrievedObject,
            {
                objectID,
                hide: true,
            },
        ];
        // Put the object into storage
        localStorage.setItem("articleData", JSON.stringify(articleData));
    };

    const onClick = (objectID) => {
        const data = state.data?.hits?.filter((item) => {
            return item.objectID !== objectID;
        });

        setItemInStorage(objectID);
        dispatch({
            type: "SET_FILTERED_HIDE_DATA",
            payload: data,
        });
    };

    return (
        <>
            <StyledArticleInfo>
                {url && (
                    <a href={url} title={title} className="domain-style">
                        {`( ${domain} )`}
                    </a>
                )}
                <span className="by-label">{LABEL_AUTHOR_BY}</span>
                <span className="author-text">{` ${author} `}</span>
                <span className="time-style">{time}</span>
                <Button onCLickHandler={() => onClick(objectID)}>
                    <span>[ </span>
                    {LABEL_HIDE_BTN}
                    <span> ]</span>
                </Button>
            </StyledArticleInfo>
        </>
    );
};

export default ArticleInfo;
