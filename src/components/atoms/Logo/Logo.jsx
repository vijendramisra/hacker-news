import React from "react";
import StyledLogo from "./Logo.style";

const Logo = ({ className, children }) => {
    return <StyledLogo className={className}>{children}</StyledLogo>;
};

export default Logo;
