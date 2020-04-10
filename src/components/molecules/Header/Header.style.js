import styled from "styled-components";

export const StyledHeader = styled.div`
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: ${(props) => props.theme.fontSizeBig};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    background: ${(props) => props.theme.mainRowColor};
    padding: 10px;
    display: flex;
`;
