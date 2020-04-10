import React from "react";
import DataContext from "../../context/DataContext";
import ArticleItemRow from "../molecules/ArticleItemRow";

const ArticleListContainer = () => {
    const { state } = React.useContext(DataContext);
    return (
        <>
            <ul>
                {state.data?.hits?.length > 0 &&
                    state.data.hits.map((item, index) => (
                        <ArticleItemRow key={index} item={item} />
                    ))}
            </ul>
        </>
    );
};

export default ArticleListContainer;
