import React from "react";
import Button from "../../atoms/Button";
import StyledFilters from "./Filters.style";
import { LABEL_FILTER_TOP_BTN, LABEL_FILTER_NEW_BTN } from "../../../constants";

const Filters = () => {
    return (
        <>
            <StyledFilters>
                <Button>{LABEL_FILTER_TOP_BTN}</Button>
                <span> | </span>
                <Button>{LABEL_FILTER_NEW_BTN}</Button>
            </StyledFilters>
        </>
    );
};

export default Filters;
