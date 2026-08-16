import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

import Home from "./pages/Home";
import ProductCatalog from "./pages/ProductCatalog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;