import styled from "styled-components";

const StyledTitle = styled.h3`
    font-size: ${(props) => props.theme.fontSizeBig};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    padding: 0 10px;
    margin: 0;
`;

export default StyledTitle;
