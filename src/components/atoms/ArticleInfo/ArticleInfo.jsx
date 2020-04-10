import React from "react";
import StyledArticleInfo from "./ArticleInfo.style";
import Button from "../Button";
import { LABEL_AUTHOR_BY, LABEL_HIDE_BTN } from "../../../constants";

const ArticleInfo = ({ url, title, domain, author, time }) => {
    return (
        <>
            <StyledArticleInfo>
                {url && (
                    <a href={url} title={title} className="domainStyle">
                        {`( ${domain} )`}
                    </a>
                )}
                <span className="byLabel">{LABEL_AUTHOR_BY}</span>
                <span className="authorText">{` ${author} `}</span>
                <span className="timeStyle">{time}</span>
                <Button>
                    <span>[ </span>
                    {LABEL_HIDE_BTN}
                    <span> ]</span>
                </Button>
            </StyledArticleInfo>
        </>
    );
};

export default ArticleInfo;
