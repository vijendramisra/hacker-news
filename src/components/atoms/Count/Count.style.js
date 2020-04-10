import styled from "styled-components";

const StyledCount = styled.span`
    color: ${(props) =>
        props.primary
            ? props.theme.primaryTextColor
            : props.theme.voteTextColor};
    font-size: ${(props) => props.theme.fontSizeMediumSmall};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    padding: ${(props) => (props.commentCount ? "0 40px 0 0" : "0")};
`;
export default StyledCount;
