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
    cursor: pointer;

    .arrow-up {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid ${(props) => props.theme.arrowColor};
        position: relative;
        bottom: 12px;
    }
`;
export default StyledButton;
