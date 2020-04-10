import styled from "styled-components";

const StyledArticleInfo = styled.div`
    a {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    .byLabel {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
    }
    .authorText {
        font-size: ${(props) => props.theme.fontSizeMedium};
    }
    .timeStyle {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
    }
`;

export default StyledArticleInfo;
