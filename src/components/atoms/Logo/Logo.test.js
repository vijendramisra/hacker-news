import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

test("logo atom is rendering", () => {
    const { getByText } = render(<Logo>Y</Logo>);
    const buttonElement = getByText(/Y/i);
    expect(buttonElement).toBeInTheDocument();
});
