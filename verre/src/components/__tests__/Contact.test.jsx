import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../../pages/Contact";

describe("Contact", () => {
  test("renders the contact page", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Contact Verre",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Have a question about our collection/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Email us at:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/b\.a@verreglassware\.com/i)
    ).toBeInTheDocument();
  });
});
