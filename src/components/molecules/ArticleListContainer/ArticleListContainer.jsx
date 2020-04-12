import React from "react";
import DataContext from "../../../context/DataContext";
import ArticleItemRow from "../ArticleItemRow";
import StyledArticleListContainer from "./ArticleListContainer.style";
import * as utils from "../../../utils/utils";

const ArticleListContainer = () => {
    const { state } = React.useContext(DataContext);
    return (
        <>
            <StyledArticleListContainer>
                {state.data?.hits?.length > 0 &&
                    state.data.hits.map((item, index) => (
                        <ArticleItemRow
                            key={index}
                            item={item}
                            isEven={utils.isEven(index)}
                        />
                    ))}
            </StyledArticleListContainer>
        </>
    );
};

export default ArticleListContainer;
