import React from "react";
import DataContext from "../../../context/DataContext";
import ArticleItemRow from "../ArticleItemRow";
import * as S from "./ArticleListContainer.style";
import * as utils from "../../../utils/utils";

const ArticleListContainer = () => {
    const { state } = React.useContext(DataContext);
    return (
        <>
            <S.StyledArticleListContainer>
                {state.data?.hits?.length > 0 &&
                    state.data.hits.map((item, index) => (
                        <ArticleItemRow
                            key={index}
                            item={item}
                            isEven={utils.isEven(index)}
                        />
                    ))}
            </S.StyledArticleListContainer>
        </>
    );
};

export default ArticleListContainer;
