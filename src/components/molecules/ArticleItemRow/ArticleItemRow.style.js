import styled from "styled-components";

export const StyledArticleItemRow = styled.li`
    background: ${(props) =>
        props.isEven
            ? props.theme.primaryRowColor
            : props.theme.secondaryRowColor};
    padding: 10px 40px;
    margin: 0;
    display: flex;

    .titleWrapper {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: start;

        .titleWrapper {
            align-items: inherit;
            padding: 0 0 10px;
        }
    }
`;
