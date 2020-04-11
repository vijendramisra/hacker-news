import React from "react";
import StyledArticleInfo from "./ArticleInfo.style";
import Button from "../Button";
import { LABEL_AUTHOR_BY, LABEL_HIDE_BTN } from "../../../constants";

const ArticleInfo = ({ url, title, domain, author, time, objectID }) => {
    const onClick = (objectID) => {
        alert(`clicked for ${objectID}`);
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
