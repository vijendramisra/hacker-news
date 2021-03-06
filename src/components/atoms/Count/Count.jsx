import React from "react";
import StyledCount from "./Count.style";

const Count = ({ className, count, primary, commentCount }) => (
    <StyledCount
        className={className}
        primary={primary}
        commentCount={commentCount}
    >
        {count}
    </StyledCount>
);

export default Count;
