import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="static-page">
      <Navbar />
      <main className="page-content">
        <h1>Contact Verre</h1>

        <p>
          Have a question about our collection or want to
          learn more about Verre?
        </p>

        <p>
          Email us at:
          <br />
          <a href="mailto:b.a@verreglassware.com">b.a@verreglassware.com</a>
        </p>

        <p className="page-content-links">
          Want to see what we make first? Browse the <Link to="/products">Collection</Link>{' '}
          or read more <Link to="/about">About Verre</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
