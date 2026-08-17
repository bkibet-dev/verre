import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="static-page">
      <Navbar />
      <main className="page-content">
        <h1>About Verre</h1>

        <p>
          Verre is a glassware studio dedicated to creating
          carefully crafted pieces that bring simplicity,
          elegance, and beauty into everyday spaces.
        </p>

        <p>
          Every piece begins as an idea and is transformed
          through the art of glassmaking.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
