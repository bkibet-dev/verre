import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          GLASSWARE STUDIO
        </p>

        <h1>
          Every piece
          <br />
          begins as <em>light.</em>
        </h1>

        <p className="hero-description">
          Verre is a small glassware studio. This portal is where
          the catalog actually gets managed — adding new pieces,
          adjusting prices, and finding a product in seconds
          rather than scrolling through a spreadsheet.
        </p>

        <Link to="/products" className="hero-button">
          Explore Collection →
        </Link>

      </div>

    </section>
  );
}

export default Hero;