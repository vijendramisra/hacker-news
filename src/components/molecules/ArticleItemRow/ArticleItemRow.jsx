import React from "react";
import Count from "../../atoms/Count";
import Title from "../../atoms/Title";
import ArticleInfo from "../../atoms/ArticleInfo";
import DataContext from "../../../context/DataContext";
import Button from "../../atoms/Button";
import { getDomain, convertDate } from "../../../utils/utils";
import StyledArticleItemRow from "./ArticleItemRow.style";

const ArticleItemRow = ({ item, isEven }) => {
    const { state, dispatch } = React.useContext(DataContext);
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

    const onUpVoteClick = (objID) => {
        const currentData = { ...state };
        const updatedState = currentData.data?.hits?.map((val) => {
            if (val.objectID === objID) {
                val.points = val.points + 1;
            }
            return val;
        });
        dispatch({
            type: "SET_UPVOTE_HIDE_DATA",
            payload: updatedState,
        });
    };

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
                    <Button
                        ariaLabel="Vote Up"
                        onCLickHandler={() => onUpVoteClick(objectID)}
                    >
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
