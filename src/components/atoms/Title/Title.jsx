import React from "react";
import StyledTitle from "./Title.style";

const Title = ({ className, title }) => (
    <StyledTitle className={className}>{title}</StyledTitle>
);

export default Title;
