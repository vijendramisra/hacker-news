import React from "react";

const Button = (props) => {
    return (
        <button
            type="button"
            className={props.className}
            onClick={props.onCLick}
        >
            {props.children}
        </button>
    );
};

export default Button;
