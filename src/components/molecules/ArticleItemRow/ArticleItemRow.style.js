import styled from "styled-components";

export const StyledArticleItemRow = styled.li`
    background: ${(props) =>
        props.isEven
            ? props.theme.primaryRowColor
            : props.theme.secondaryRowColor};
    padding: 10px 40px;
    margin: 0;
    display: flex;

    div {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
    }
`;
