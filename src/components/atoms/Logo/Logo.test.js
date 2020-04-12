import React from "react";
import { render } from "@testing-library/react";
import StyledLogo from "./Logo.style";

test("logo atom is rendering", () => {
    const { getByText } = render(<StyledLogo>Y</StyledLogo>);
    const buttonElement = getByText(/Y/i);
    expect(buttonElement).toBeInTheDocument();
});
