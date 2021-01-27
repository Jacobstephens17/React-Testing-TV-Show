import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


test("fetches and renders show data", () => {
  render(<App />);
});


test('test dropdown renders season 1 ', async () => {
    render(<App/>)

    const dropdown = await screen.findByText(/select a season/i);
    userEvent.click(dropdown)
    
    const seasonOne = await screen.findByText(/season 1/i);
    expect(seasonOne).toBeInTheDocument()

  
  });
  
