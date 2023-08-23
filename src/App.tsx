import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/FooterBar";
import Header from "./components/Header/Header";
import Produtos from "./components/Produtos/Produtos";
import Produto from "./components/Produto/Produto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
