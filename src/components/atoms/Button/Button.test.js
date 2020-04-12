import React from "react";
import { render } from "@testing-library/react";
import StyledButton from "./Button.style";

test("button atom is rendering", () => {
    const { getByText } = render(<StyledButton>Submit</StyledButton>);
    const buttonElement = getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
});
