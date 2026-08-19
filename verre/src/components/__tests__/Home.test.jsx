import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home", () => {
  test("renders the home page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText("GLASSWARE STUDIO")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("VERRE")
    ).toHaveLength(2);

    expect(
      screen.getByRole("link", {
        name: /Explore Collection/i,
      })
    ).toBeInTheDocument();
  });
});
