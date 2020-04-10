import styled from "styled-components";

export const StyledCount = styled.span`
    color: ${(props) =>
        props.primary
            ? props.theme.primaryTextColor
            : props.theme.voteTextColor};
    font-size: ${(props) => props.theme.fontSizeMedium};
    font-weight: ${(props) => props.theme.fontWeightRegular};
`;
