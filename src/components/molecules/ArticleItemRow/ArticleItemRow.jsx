import React from "react";
import Count from "../../atoms/Count";
import Title from "../../atoms/Title";
import ArticleInfo from "../../atoms/ArticleInfo";
import { getDomain, convertDate } from "../../../utils/utils";
import StyledArticleItemRow from "./ArticleItemRow.style";

const ArticleItemRow = ({ item, isEven }) => {
    const {
        num_comments,
        objectID,
        points,
        author,
        url,
        title,
        created_at,
    } = item;
    const articleURL = url !== null ? url : "";
    return (
        <>
            <StyledArticleItemRow isEven={isEven}>
                <div className="titleWrapper">
                    <Count
                        key={`comment-${objectID}`}
                        count={num_comments}
                        commentCount
                        primary
                    />
                    <Count key={`upvote-${objectID}`} count={points} />
                    <Title key={`title-${objectID}`} title={title} />
                </div>
                <ArticleInfo
                    key={`info-${objectID}`}
                    author={author}
                    url={articleURL}
                    domain={articleURL && getDomain(articleURL)}
                    time={created_at && convertDate(created_at)}
                />
            </StyledArticleItemRow>
        </>
    );
};

export default ArticleItemRow;
