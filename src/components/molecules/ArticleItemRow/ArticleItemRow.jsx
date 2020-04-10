import React from "react";
import Count from "../../atoms/Count";
import Title from "../../atoms/Title";
import ArticleInfo from "../../atoms/ArticleInfo";
import Button from "../../atoms/Button";
import { LABEL_HIDE_BTN } from "../../../constants";
import { getDomain } from "../../../utils/utils";
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
    const articleURL = url !== null ? url : "";
    return (
        <>
            <S.StyledArticleItemRow isEven={isEven}>
                <Count
                    key={`comment-${objectID}`}
                    count={num_comments}
                    commentCount
                    primary
                />
                <Count key={`upvote-${objectID}`} count={points} />
                <Title key={`title-${objectID}`} title={title} />
                <ArticleInfo
                    key={`info-${objectID}`}
                    author={author}
                    url={articleURL}
                    domain={articleURL && getDomain(articleURL)}
                    time={created_at}
                />
                <Button>
                    <span>[ </span>
                    {LABEL_HIDE_BTN}
                    <span> ]</span>
                </Button>
            </S.StyledArticleItemRow>
        </>
    );
};

export default ArticleItemRow;
