import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("button atom is rendering", () => {
    const { getByText } = render(<Button>Submit</Button>);
    const buttonElement = getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
});
