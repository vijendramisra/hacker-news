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
    .by-label {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
        padding: 0 5px;
    }
    .author-text {
        font-size: ${(props) => props.theme.fontSizeMedium};
        padding: 0 5px 0 0;
    }
    .time-style {
        font-size: ${(props) => props.theme.fontSizeMedium};
        color: ${(props) => props.theme.darkTextColor};
    }

    @media screen and (max-width: 1024px) {
        padding-left: 130px;
    }

    @media screen and (max-width: 425px) {
        padding-left: 125px;
    }
`;

export default StyledArticleInfo;
