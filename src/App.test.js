import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


test("fetches and renders show data", () => {
  render(<App />);
});


test('test dropdown', () => {
    render(<App/>)
})