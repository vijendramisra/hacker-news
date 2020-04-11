import React from "react";
import Count from "../../atoms/Count";
import Title from "../../atoms/Title";
import ArticleInfo from "../../atoms/ArticleInfo";
import Button from "../../atoms/Button";
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
                <div className="title-wrapper">
                    <Count
                        key={`comment-${objectID}`}
                        count={num_comments}
                        commentCount
                        primary
                    />
                    <Count key={`upvote-${objectID}`} count={points} />
                    <Button ariaLabel="Vote Up">
                        <span className="arrow-up"></span>
                    </Button>
                    <Title key={`title-${objectID}`} title={title} />
                </div>
                <ArticleInfo
                    key={`info-${objectID}`}
                    author={author}
                    url={articleURL}
                    domain={articleURL && getDomain(articleURL)}
                    time={created_at && convertDate(created_at)}
                    objectID={objectID}
                />
            </StyledArticleItemRow>
        </>
    );
};

export default ArticleItemRow;
