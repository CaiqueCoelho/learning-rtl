import React from "react";
import { render, cleanup, waitFor, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import axiosMock from "axios";
import Fetch from "./Fetch";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

it.only("Fetches and displays data", async() => {
    axiosMock.get.mockResolvedValueOnce({data: {greeting: "hello there"}})
    const url = "/greeting"
    act(() => {
        render(<Fetch url={url} />)
    });
    expect(screen.getByTestId('loading')).toHaveTextContent("Loading data...")

    const resolvedSpan = await waitFor( () => screen.getByTestId("resolved"));

    expect(resolvedSpan).toHaveTextContent("hello there");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url)
});