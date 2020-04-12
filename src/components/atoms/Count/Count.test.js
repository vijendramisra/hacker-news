import React from "react";
import { render } from "@testing-library/react";
import StyledCount from "./Count.style";

test("count atom is rendering", () => {
    const { getByText } = render(
        <StyledCount commentCount="300">300</StyledCount>
    );
    const buttonElement = getByText(/300/i);
    expect(buttonElement).toBeInTheDocument();
});
