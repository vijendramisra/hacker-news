import React from "react";
import { render } from "@testing-library/react";
import ContentLoader from "react-content-loader";

test("Loader is rendering", () => {
    const { getByText } = render(<ContentLoader />);
    const linkElement = getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});
