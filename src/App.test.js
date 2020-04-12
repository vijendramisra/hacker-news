import React from "react";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
const mockSuccessResponse = {
    hits: [
        {
            objectId: "323232",
            url: "#",
            title: "Test Article",
            num_comments: "32332",
        },
    ],
};

const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
const mockFetchPromise = Promise.resolve({
    // 3
    json: () => mockJsonPromise,
});

beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => {
        return mockFetchPromise;
    });
});
afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
});
afterEach(cleanup);

test("App is rendering", async () => {
    // const mockFn = jest
    //     .spyOn(global.fetch, "useReducer")
    //     .mockImplementation(() =>
    //         // Promise.resolve()
    // [
    //     {
    //         isLoading: false,
    //         isError: false,
    //         data: {
    //             hits: [
    //                 {
    //                     objectId: "323232",
    //                     url: "#",
    //                     title: "Test Article",
    //                     num_comments: "32332",
    //                 },
    //             ],
    //         },
    //         currentPageNum: 0,
    //     },
    //     jest.fn(),
    // ]
    //     );

    // const [state, dispatch] = mockFn();
    let container = null;
    await act(async () => {
        container = render(<App />).container;
        expect(container.querySelector(".loader-container").textContent).toBe(
            "Loading..."
        );
    });
});
