import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";

describe("Hero", () => {
  test("renders the hero content", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByText("GLASSWARE STUDIO")).toBeInTheDocument();

    expect(
      screen.getByText(/Every piece/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Verre is a small glassware studio/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /Explore Collection/i,
      })
    ).toHaveAttribute("href", "/products");
  });
});
