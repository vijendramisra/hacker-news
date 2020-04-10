import React from "react";
import Logo from "../../atoms/Logo";
import Filters from "../../molecules/Filters";
import * as S from "../Header/Header.style";

const Header = () => {
    return (
        <>
            <S.StyledHeader>
                <Logo>Y</Logo>
                <Filters />
            </S.StyledHeader>
        </>
    );
};

export default Header;
