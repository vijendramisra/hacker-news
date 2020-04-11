import React from "react";
import { render } from "@testing-library/react";
import Count from "./Count";

test("count atom is rendering", () => {
    const { getByText } = render(<Count count="200" />);
    const buttonElement = getByText(/200/i);
    expect(buttonElement).toBeInTheDocument();
});
