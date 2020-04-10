import React from "react";
import StyledTitle from "./Title.style";

const Title = ({ className, title }) => {
    return <StyledTitle className={className}>{title}</StyledTitle>;
};

export default Title;
