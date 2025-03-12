import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Ofertas from "./components/Ofertas";
import Artigo01 from "./components/Artigo01";
import Artigo02 from "./components/Artigo02";
import Suporte from "./components/Suporte";
import Footer from "./components/Footer";
import Smartphone from "./Pages/Smartphone";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content"> {/* Adicione esta div */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Ofertas />
              <Artigo01 />
              <Artigo02 />
              <Suporte />
              <Footer />
            </>
          } />
          <Route path="/smartphone" element={<Smartphone />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
