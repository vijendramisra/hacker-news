import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
    <ContentLoader viewBox="-100 0 300 460" height={560} width={500} speed={2}>
        <rect x="0" y="13" rx="4" ry="4" width="500" height="15" />
        <rect x="0" y="29" rx="4" ry="4" width="500" height="15" />
        <rect x="0" y="50" rx="4" ry="4" width="500" height="15" />
        <rect x="0" y="65" rx="4" ry="4" width="500" height="15" />
        <rect x="0" y="79" rx="4" ry="4" width="500" height="15" />
        <rect x="0" y="99" rx="5" ry="5" width="500" height="15" />
    </ContentLoader>
);

export default Loader;
