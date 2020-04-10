import React from "react";
import Count from "../atoms/Count";
import Title from "../atoms/Title";
import ArticleInfo from "../atoms/ArticleInfo";

const ArticleItemRow = ({ item }) => {
    const {
        num_comments,
        objectID,
        points,
        author,
        url,
        title,
        created_at,
    } = item;
    return (
        <>
            <li>
                <Count
                    key={`comment-${objectID}`}
                    count={num_comments}
                    primary
                />
                <Count key={`upvote-${objectID}`} count={points} />
                <Title key={`title-${objectID}`} title={title} />
                <ArticleInfo
                    key={`info-${objectID}`}
                    author={author}
                    url={url}
                    time={created_at}
                />
            </li>
        </>
    );
};

export default ArticleItemRow;
