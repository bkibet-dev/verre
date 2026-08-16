import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
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
          b.a@verreglassware.com
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Contact;