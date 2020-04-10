import React from "react";
import * as S from "./Count.style";

const Count = ({ className, count, primary }) => {
    return (
        <S.StyledCount className={className} primary={primary}>
            {count}
        </S.StyledCount>
    );
};

export default Count;
