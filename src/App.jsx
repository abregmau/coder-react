// REACT
import React from "react";
//PAGES
import HomeContainer from "./pages/home/HomeContainer";
import Store from "./pages/store/Store";
import ProductDetail from "./pages/detail/ProductDetail";
import Category from "./pages/categories/Category";
import Message_404 from "./pages/message_404/Message_404";

// REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
// import Cart from "./components/cart/Cart";

// CONTEXT
import { SiteProvider } from "./context/SiteContext";

function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/store" element={<Store />} />
            {/* Falta el Cart */}
            <Route exact path="/:category/:id" element={<ProductDetail />} />
            <Route exact path="/:category" element={<Category />} />
            <Route exact path="*" element={<Message_404 />} />
          </Routes>
          <Footer copyright="Todos los derechos reservados." />
        </div>
      </BrowserRouter>
    </SiteProvider>
  );
}

export default App;
