import React from "react";
import StyledButton from "./Button.style";

const Button = ({ onCLickHandler, className, children }) => {
    return (
        <StyledButton
            className={className}
            type="button"
            onClick={onCLickHandler}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
