import React from "react";

const ArticleInfo = (props) => {
    return (
        <>
            <a
                href={props.url}
                title={props.title}
                className={props.domainClassName}
            >
                {props.domain}
            </a>
            <span>by</span>
            <span className={props.authorClassName}>{props.author}</span>
            <span className={props.timeClassName}>{props.time}</span>
        </>
    );
};

export default ArticleInfo;
