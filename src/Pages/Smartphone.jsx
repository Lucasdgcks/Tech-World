import React, { useState } from "react";
import "../Pages/stylesPages/Smartphone.css";
import smartphoneTS1 from "../assets/smarthphonex1.png";
const Smartphone = () => {
  
  const smartphones = [
    { id: 1, nome: "TS Mini", descricao: "Tela HD de 6,1”, Chip TS-X1, Câmera 16MP.", preco: 1799, imagem: smartphoneTS1, cor: "Preto", tipoSistema: "Android", categoria: "celular" },
    { id: 2, nome: "TS Plus", descricao: "Tela OLED de 6,5”, Chip TS-X2, Câmera 32MP.", preco: 2499, imagem: "", cor: "Branco", tipoSistema: "Android", categoria: "celular" },
    { id: 3, nome: "TS Pro Max", descricao: "Tela Super AMOLED 6,8”, Chip TS-X3, Câmera 50MP.", preco: 3299, imagem: "", cor: "Azul", tipoSistema: "Android", categoria: "celular" },
    { id: 4, nome: "TS Lite", descricao: "Tela LCD 6,0”, Chip TS-L1, Câmera 12MP.", preco: 1199, imagem: "", cor: "Cinza", tipoSistema: "Android", categoria: "celular" },
    { id: 5, nome: "TS Ultra", descricao: "Tela AMOLED 6,9”, Chip TS-U1, Câmera 108MP.", preco: 5499, imagem: "", cor: "Dourado", tipoSistema: "Android", categoria: "celular" },
    { id: 6, nome: "TS Max", descricao: "Tela OLED 6,7”, Chip TS-M1, Câmera 64MP.", preco: 4199, imagem: "", cor: "Preto", tipoSistema: "Android", categoria: "celular" },
    { id: 7, nome: "TS Edge", descricao: "Tela Curva 6,8”, Chip TS-E1, Câmera 48MP.", preco: 2899, imagem: "", cor: "Vermelho", tipoSistema: "Android", categoria: "celular" },
    { id: 8, nome: "TS Neo", descricao: "Tela FHD+ 6,2”, Chip TS-N1, Câmera 20MP.", preco: 1999, imagem: "", cor: "Prata", tipoSistema: "Android", categoria: "celular" },
    { id: 9, nome: "TS Vibe", descricao: "Tela AMOLED 6,4”, Chip TS-V1, Câmera 24MP.", preco: 2199, imagem: "", cor: "Azul", tipoSistema: "Android", categoria: "celular" },
    { id: 10, nome: "TS Zoom", descricao: "Tela 6,7” Full HD, Chip TS-Z1, Câmera 64MP.", preco: 3599, imagem: "", cor: "Preto", tipoSistema: "Android", categoria: "celular" },
    { id: 11, nome: "TS Max Plus", descricao: "Tela OLED 6,8”, Chip TS-MX1, Câmera 72MP.", preco: 3999, imagem: "", cor: "Branco", tipoSistema: "Android", categoria: "celular" },
    { id: 12, nome: "TS Air", descricao: "Tela LCD 6,0”, Chip TS-A1, Câmera 10MP.", preco: 999, imagem: "", cor: "Cinza", tipoSistema: "Android", categoria: "celular" },
    { id: 13, nome: "TS Max Ultra", descricao: "Tela AMOLED 7,0”, Chip TS-MX2, Câmera 120MP.", preco: 6799, imagem: "", cor: "Dourado", tipoSistema: "Android", categoria: "celular" },
    { id: 14, nome: "TS Flex", descricao: "Tela dobrável 7,2”, Chip TS-F1, Câmera 50MP.", preco: 5199, imagem: "", cor: "Preto", tipoSistema: "Android", categoria: "celular" },
    { id: 15, nome: "TS Active", descricao: "Tela LCD 6,2”, Chip TS-A2, Câmera 16MP.", preco: 1599, imagem: "", cor: "Vermelho", tipoSistema: "Android", categoria: "celular" },
    { id: 16, nome: "TS Pro Ultra", descricao: "Tela AMOLED 6,9”, Chip TS-PX1, Câmera 90MP.", preco: 4899, imagem: "", cor: "Azul", tipoSistema: "Android", categoria: "celular" },
    { id: 17, nome: "TS One", descricao: "Tela FHD 6,3”, Chip TS-O1, Câmera 32MP.", preco: 2399, imagem: "", cor: "Preto", tipoSistema: "Android", categoria: "celular" },
    { id: 18, nome: "TS Fusion", descricao: "Tela AMOLED 6,5”, Chip TS-F2, Câmera 48MP.", preco: 3199, imagem: "", cor: "Branco", tipoSistema: "Android", categoria: "celular" },
    { id: 19, nome: "TS Pro Lite", descricao: "Tela HD 6,1”, Chip TS-PL1, Câmera 13MP.", preco: 1699, imagem: "", cor: "Cinza", tipoSistema: "Android", categoria: "celular" },
    { id: 20, nome: "TS Vision", descricao: "Tela 6,6” OLED, Chip TS-VX1, Câmera 60MP.", preco: 3299, imagem: "", cor: "Prata", tipoSistema: "Android", categoria: "celular" }
  ];
  

  const [filters, setFilters] = useState({
    cor: [],
    sistema: [],
    faixaPreco: [0, 10000]
  });

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newValues = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value) // Remove se já estiver selecionado
        : [...prevFilters[filterType], value]; // Adiciona se não estiver selecionado
  
      return { ...prevFilters, [filterType]: newValues };
    });
  };
  

  const handlePriceChange = (event) => {
    const newPrice = Number(event.target.value); // Converte o valor do input
    setFilters((prevFilters) => ({
      ...prevFilters,
      faixaPreco: [prevFilters.faixaPreco[0], newPrice] // Mantém o mínimo e atualiza o máximo
    }));
  };
  

  const filteredSmartphones = smartphones.filter((phone) => {
    const isCorMatch = filters.cor.length === 0 || filters.cor.includes(phone.cor);
    const isSistemaMatch = filters.sistema.length === 0 || filters.sistema.includes(phone.tipoSistema);
    const isPrecoMatch = phone.preco >= filters.faixaPreco[0] && phone.preco <= filters.faixaPreco[1];
    return isCorMatch && isSistemaMatch && isPrecoMatch;
  });

  return (
    <section className="smartphone-page">
      <div className="content">
        <div className="sidebar">
          <h2>Filtros</h2>
          <div className="filter-section">
            <h3>Cor:</h3>
            {['Preto', 'Branco', 'Azul', 'Vermelho', 'Prata', 'Dourado', 'Cinza'].map((cor) => (
              <label key={cor}>
                <input
                  type="checkbox"
                  value={cor}
                  onChange={() => handleCheckboxChange('cor', cor)}
                /> {cor}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Sistema Operacional:</h3>
            {['Android', 'iOS'].map((sistema) => (
              <label key={sistema}>
                <input
                  type="checkbox"
                  value={sistema}
                  onChange={() => handleCheckboxChange('sistema', sistema)}
                /> {sistema}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Faixa de Preço:</h3>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={filters.faixaPreco[1]}
              onChange={handlePriceChange}
            />
            <p>De R$ 0 até R$ {filters.faixaPreco[1]}</p>

          </div>
        </div>

        <div className="smartphone-container">
    {filteredSmartphones && filteredSmartphones.length === 0 ? (
      <strong>
        <p>Nenhum smartphone encontrado.</p>
      </strong>
    ) : (
    filteredSmartphones?.map((phone) => (
      <div key={phone.id} className="smartphone-card">
        <img src={phone.imagem} alt={phone.nome} />
        <h2>{phone.nome}</h2>
        <p>{phone.descricao}</p>
        <p><strong>Cor:</strong> {phone.cor}</p>
        <span>R$ {phone.preco}</span>
        <p className="frete">Frete: R$ 30,00</p>
        <button className="comprar-button">Comprar</button>
      </div>
    ))
  )}
</div>

      </div>
    </section>
  );
};

export default Smartphone;
