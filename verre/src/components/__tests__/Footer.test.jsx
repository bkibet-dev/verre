import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("renders the footer content", () => {
    render(<Footer />);

    expect(screen.getByText("VERRE")).toBeInTheDocument();

    expect(
      screen.getByText("Every piece begins as light.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("© 2026 Verre Glassware Studio")
    ).toBeInTheDocument();
  });
});
