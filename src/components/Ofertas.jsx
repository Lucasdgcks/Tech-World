import { useState } from "react";
import "../styles/Ofertas.css";
import smartphoneTS1 from "../assets/smarthphonex1.png"; // Importando as imagens
import headphoneTH7 from "../assets/fonegamerTH7.png";
import smartwatchTW5 from "../assets/smartwatchTW5.png";
import notebookTNFast from "../assets/notebookTNFast.png";
import notebookGamerTNUltra from "../assets/notebookGamerTNUltra.png";

// Aqui você pode continuar importando o restante das imagens se necessário

const Ofertas = () => {
  const produtos = [
    { id: 1, nome: "Smartphone TS1", preco: "R$ 1.299,99", imagem: smartphoneTS1, envio: "Envio grátis", descricao: "Tela 6.5', Processador Octa-core, Câmera 48MP" },
    { id: 2, nome: "Headphone TH7", preco: "R$ 199,99", imagem: headphoneTH7, envio: "Envio grátis", descricao: "Som estéreo, Conforto extra, Conexão sem fio" },
    { id: 3, nome: "Smartwatch TW5", preco: "R$ 349,99", imagem: smartwatchTW5, envio: "Envio grátis", descricao: "Monitoramento de batimentos cardíacos, Bateria de longa duração" },
    { id: 4, nome: "Notebook TN Fast", preco: "R$ 2849,99", imagem: notebookTNFast, envio: "Envio grátis", descricao: "Intel i7, 16GB RAM, SSD 512GB" },
    { id: 5, nome: "Notebook TN Ultra", preco: "R$ 5779,99", imagem: notebookGamerTNUltra, envio: "Envio grátis", descricao: "Intel i9, 32GB RAM, RTX 3070, Tela 144Hz" },
    { id: 6, nome: "Notebook Ultra", preco: "R$ 3.499,99", imagem: "https://via.placeholder.com/300x200?text=Notebook", envio: "Envio grátis", descricao: "AMD Ryzen 5, 8GB RAM, 1TB HD" },
    { id: 7, nome: "Cadeira Gamer", preco: "R$ 899,99", imagem: "https://via.placeholder.com/300x200?text=Cadeira", envio: "Envio grátis", descricao: "Conforto ergonômico, Apoio lombar ajustável" },
    { id: 8, nome: "Câmera DSLR", preco: "R$ 2.499,99", imagem: "https://via.placeholder.com/300x200?text=Câmera", envio: "Envio grátis", descricao: "Sensor 24.1MP, Zoom 18-55mm, Wi-Fi integrado" },
    { id: 9, nome: "Microfone Condensador", preco: "R$ 399,99", imagem: "https://via.placeholder.com/300x200?text=Microfone", envio: "Envio grátis", descricao: "Som claro e nítido, Ideal para gravações" },
    { id: 10, nome: "Óculos de Sol", preco: "R$ 129,99", imagem: "https://via.placeholder.com/300x200?text=Óculos", envio: "Envio grátis", descricao: "Proteção UV400, Design moderno" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < produtos.length - 4) { // Corrigido para evitar erro
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="ofertas">
      <h2>Ofertas do Dia</h2>
      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>{"<"}</button>
        <div className="carousel-container">
          {produtos.slice(currentIndex, currentIndex + 4).map((produto) => (
            <div key={produto.id} className="product-card">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="product-info">
                <h3>{produto.nome}</h3>
                <p className="descricao">{produto.descricao}</p>
                <p>{produto.preco}</p>
                <p className="envio">{produto.envio}</p>
                <button className="buy-button">Comprar</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>{">"}</button>
      </div>
    </section>
  );
};

export default Ofertas;