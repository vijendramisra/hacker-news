import styled from "styled-components";

const StyledButton = styled.button`
    width: auto;
    height: auto;
    background: ${(props) => props.theme.transparentColor};
    color: ${(props) => props.theme.primaryTextColor};
    font-size: ${(props) => props.theme.fontSizeMedium};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    display: inline-block;
    text-align: center;
    border: ${(props) => props.theme.transparentColor};
`;
export default StyledButton;
