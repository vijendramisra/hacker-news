import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App is rendering", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});
