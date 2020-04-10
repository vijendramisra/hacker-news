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
        padding: 0 5px;
    }
    .authorText {
        font-size: ${(props) => props.theme.fontSizeMedium};
        padding: 0 5px 0 0;
    }
    .timeStyle {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
    }
`;

export default StyledArticleInfo;
