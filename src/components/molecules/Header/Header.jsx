import React from "react";
import Logo from "../../atoms/Logo";
import Filters from "../../molecules/Filters";
import StyledHeader from "../Header/Header.style";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Logo>Y</Logo>
                <Filters />
            </StyledHeader>
        </>
    );
};

export default Header;
