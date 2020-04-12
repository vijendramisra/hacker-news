import React from "react";
import StyledLogo from "./Logo.style";

const Logo = ({ className, children }) => (
    <StyledLogo className={className}>{children}</StyledLogo>
);

export default Logo;
