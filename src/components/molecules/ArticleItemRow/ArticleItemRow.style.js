import styled from "styled-components";

export const StyledArticleItemRow = styled.li`
    background: ${(props) =>
        props.isEven
            ? props.theme.primaryRowColor
            : props.theme.secondaryRowColor};
`;
