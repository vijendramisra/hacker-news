import React from "react";
import Count from "../../atoms/Count";
import Title from "../../atoms/Title";
import ArticleInfo from "../../atoms/ArticleInfo";
import * as S from "./ArticleItemRow.style";

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
    return (
        <>
            <S.StyledArticleItemRow isEven={isEven}>
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
            </S.StyledArticleItemRow>
        </>
    );
};

export default ArticleItemRow;
