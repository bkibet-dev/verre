import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../../pages/About";

describe("About", () => {
  test("renders the about page", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "About Verre",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Verre is a glassware studio/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Every piece begins as an idea/i)
    ).toBeInTheDocument();
  });
});
