import React from "react";
import * as Btn from "./Button.style";

const Button = ({ onCLickHandler, className, children }) => {
    return (
        <Btn.StyledButton type="button" onClick={onCLickHandler}>
            {children}
        </Btn.StyledButton>
    );
};

export default Button;
