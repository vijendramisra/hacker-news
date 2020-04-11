import React from "react";
import StyledButton from "./Button.style";

const Button = ({ onCLickHandler, className, children, ariaLabel }) => {
    return (
        <StyledButton
            className={className}
            type="button"
            onClick={onCLickHandler}
            aria-label={ariaLabel}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
