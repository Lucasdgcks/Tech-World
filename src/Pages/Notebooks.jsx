import React, { useState } from "react";
import "../Pages/stylesPages/Notebooks.css";
import notebookTNFast from "../assets/notebookTNFast.png";
import notebookGamerTNUltra from "../assets/notebookGamerTNUltra.png";
import { image } from "framer-motion/client";

const notebooks = [
  { id: 1, nome: "NB Slim 14", descricao: "Tela Full HD 14”, i5 10ª gen, 8GB RAM, 256GB SSD.", preco: 3999, cor: "Prata", ram: "8GB", processador: "Intel i5", placaVideo: null, armazenamento: "256GB SSD", categoria: "notebook", imagem: "" },
  { id: 2, nome: "NB Power 15", descricao: "Tela Full HD 15,6”, Ryzen 7, 16GB RAM, 512GB SSD.", preco: 5199, cor: "Preto", ram: "16GB", processador: "Ryzen 7", placaVideo: "RTX 3050", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 3, nome: "NB Ultra 17", descricao: "Tela 17” QHD, i7 11ª gen, 32GB RAM, 1TB SSD.", preco: 7899, cor: "Cinza", ram: "32GB", processador: "Intel i7", placaVideo: "RTX 3060", armazenamento: "1TB SSD", categoria: "notebook", imagem: "" },
  { id: 4, nome: "NB Student", descricao: "Tela HD 15”, i3 10ª gen, 4GB RAM, 500GB HDD.", preco: 2499, cor: "Azul", ram: "4GB", processador: "Intel i3", placaVideo: null, armazenamento: "500GB HDD", categoria: "notebook", imagem: "" },
  { id: 5, nome: "NB Gamer Pro", descricao: "Tela 16” 165Hz, Ryzen 9, 32GB RAM, 1TB SSD.", preco: 10999, cor: "Preto", ram: "32GB", processador: "Ryzen 9", placaVideo: "RTX 4070", armazenamento: "1TB SSD", categoria: "notebook", imagem: "" },
  { id: 6, nome: "NB Essential 13", descricao: "Tela HD 13”, Intel i5 11ª gen, 8GB RAM, 512GB SSD.", preco: 4999, cor: "Cinza", ram: "8GB", processador: "Intel i5", placaVideo: null, armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 7, nome: "NB Elite 15", descricao: "Tela Full HD 15,6”, Ryzen 5, 8GB RAM, 256GB SSD.", preco: 4299, cor: "Preto", ram: "8GB", processador: "Ryzen 5", placaVideo: null, armazenamento: "256GB SSD", categoria: "notebook", imagem: "" },
  { id: 8, nome: "NB Power Plus 15", descricao: "Tela Full HD 15,6”, i7 10ª gen, 16GB RAM, 512GB SSD.", preco: 6699, cor: "Preto", ram: "16GB", processador: "Intel i7", placaVideo: "RTX 3050", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 9, nome: "NB Pro X", descricao: "Tela 15,6” QHD, Ryzen 9, 32GB RAM, 1TB SSD.", preco: 10999, cor: "Prata", ram: "32GB", processador: "Ryzen 9", placaVideo: "RTX 3070", armazenamento: "1TB SSD", categoria: "notebook", imagem: "" },
  { id: 10, nome: "NB Vibe 14", descricao: "Tela Full HD 14”, Intel i7 11ª gen, 16GB RAM, 512GB SSD.", preco: 7999, cor: "Cinza", ram: "16GB", processador: "Intel i7", placaVideo: null, armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 11, nome: "NB Sprint 15", descricao: "Tela HD 15”, Intel i3 10ª gen, 4GB RAM, 500GB SSD.", preco: 2599, cor: "Azul", ram: "4GB", processador: "Intel i3", placaVideo: null, armazenamento: "500GB SSD", categoria: "notebook", imagem: "" },
  { id: 12, nome: "NB Ultra Pro", descricao: "Tela 17” Full HD, i7 10ª gen, 16GB RAM, 512GB SSD.", preco: 6999, cor: "Preto", ram: "16GB", processador: "Intel i7", placaVideo: "RTX 3060", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 13, nome: "NB Swift 14", descricao: "Tela Full HD 14”, Ryzen 5, 8GB RAM, 256GB SSD.", preco: 3899, cor: "Prata", ram: "8GB", processador: "Ryzen 5", placaVideo: null, armazenamento: "256GB SSD", categoria: "notebook", imagem: "" },
  { id: 14, nome: "NB Edge 13", descricao: "Tela HD 13”, Intel i5 10ª gen, 8GB RAM, 512GB SSD.", preco: 5499, cor: "Cinza", ram: "8GB", processador: "Intel i5", placaVideo: null, armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 15, nome: "NB Zeta 16", descricao: "Tela Full HD 16”, Ryzen 7, 16GB RAM, 1TB SSD.", preco: 7999, cor: "Preto", ram: "16GB", processador: "Ryzen 7", placaVideo: "RTX 3060", armazenamento: "1TB SSD", categoria: "notebook", imagem: "" },
  { id: 16, nome: "NB Galaxy 15", descricao: "Tela 15,6” Full HD, Intel i5 10ª gen, 8GB RAM, 512GB SSD.", preco: 5499, cor: "Prata", ram: "8GB", processador: "Intel i5", placaVideo: "RTX 3050", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 17, nome: "NB Vision 14", descricao: "Tela Full HD 14”, Intel i7 11ª gen, 16GB RAM, 1TB SSD.", preco: 8599, cor: "Preto", ram: "16GB", processador: "Intel i7", placaVideo: "RTX 3060", armazenamento: "1TB SSD", categoria: "notebook", imagem: "" },
  { id: 18, nome: "NB Aero 13", descricao: "Tela HD 13”, Ryzen 3, 8GB RAM, 256GB SSD.", preco: 3199, cor: "Azul", ram: "8GB", processador: "Ryzen 3", placaVideo: null, armazenamento: "256GB SSD", categoria: "notebook", imagem: "" },
  { id: 19, nome: "NB Titan 16", descricao: "Tela Full HD 16”, Ryzen 7, 16GB RAM, 512GB SSD.", preco: 6999, cor: "Cinza", ram: "16GB", processador: "Ryzen 7", placaVideo: "RTX 3060", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 20, nome: "NB Infinity 15", descricao: "Tela Full HD 15,6”, Intel i5 11ª gen, 8GB RAM, 512GB SSD.", preco: 5899, cor: "Prata", ram: "8GB", processador: "Intel i5", placaVideo: "RTX 3050", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 21, nome: "NB Spectra 15", descricao: "Tela Full HD 15,6”, Intel i7 10ª gen, 16GB RAM, 512GB SSD.", preco: 7499, cor: "Preto", ram: "16GB", processador: "Intel i7", placaVideo: "RTX 3070", armazenamento: "512GB SSD", categoria: "notebook", imagem: "" },
  { id: 22, nome: "Notebook TN Fast", descricao: "Intel i7, 16GB RAM, SSD 512GB", preco: 2849.99, cor: "Preto", ram: "16GB", processador: "Intel i7", placaVideo: null, armazenamento: "512GB SSD", categoria: "notebook", imagem: notebookTNFast },
  { id: 23, nome: "Notebook TN Ultra", descricao: "Intel i9, 32GB RAM, RTX 3060, Tela 144Hz", preco: 5779.99, cor: "Preto", ram: "32GB", processador: "Intel i9", placaVideo: "RTX 3060", armazenamento: "512GB SSD", categoria: "notebook", imagem: notebookGamerTNUltra }
];


const Notebooks = () => {
  const [filters, setFilters] = useState({
    cor: [],
    ram: [],
    processador: [],
    armazenamento: [],
    placaVideo: [],
    precoMin: 0,
    precoMax: 10000
  });

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newValues = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      return { ...prevFilters, [filterType]: newValues };
    });
  };

  const handlePriceChange = (minOrMax, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [`preco${minOrMax}`]: value
    }));
  };

  const notebooksFiltrados = notebooks.filter(notebook => {
    const isCorMatch = filters.cor.length === 0 || filters.cor.includes(notebook.cor);
    const isRamMatch = filters.ram.length === 0 || filters.ram.includes(notebook.ram);
    const isProcessadorMatch = filters.processador.length === 0 || filters.processador.includes(notebook.processador);
    const isArmazenamentoMatch = filters.armazenamento.length === 0 || filters.armazenamento.includes(notebook.armazenamento);
    const isPlacaVideoMatch = filters.placaVideo.length === 0 || filters.placaVideo.includes(notebook.placaVideo);
    const isPrecoMatch = notebook.preco >= filters.precoMin && notebook.preco <= filters.precoMax;

    return isCorMatch && isRamMatch && isProcessadorMatch && isArmazenamentoMatch && isPlacaVideoMatch && isPrecoMatch;
  });

  return (
    <div className="notebook-page">
      <div className="sidebar">
        <h2>Filtros</h2>

        <div className="filter-section">
          <h3>Cor:</h3>
          {["Prata", "Preto", "Cinza", "Azul"].map(cor => (
            <label key={cor}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('cor', cor)}
                checked={filters.cor.includes(cor)}
              />
              {cor}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3>RAM:</h3>
          {["4GB", "8GB", "16GB", "32GB"].map(ram => (
            <label key={ram}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('ram', ram)}
                checked={filters.ram.includes(ram)}
              />
              {ram}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3>Processador:</h3>
          {["Intel i3", "Intel i5", "Intel i7", "Ryzen 7", "Ryzen 9"].map(processador => (
            <label key={processador}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('processador', processador)}
                checked={filters.processador.includes(processador)}
              />
              {processador}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3>Armazenamento:</h3>
          {["500GB HDD", "256GB SSD", "512GB SSD", "1TB SSD"].map(armazenamento => (
            <label key={armazenamento}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('armazenamento', armazenamento)}
                checked={filters.armazenamento.includes(armazenamento)}
              />
              {armazenamento}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3>Placa de Vídeo:</h3>
          {["RTX 3050", "RTX 3060", "RTX 4070"].map(placaVideo => (
            <label key={placaVideo}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('placaVideo', placaVideo)}
                checked={filters.placaVideo.includes(placaVideo)}
              />
              {placaVideo}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3>Preço:</h3>
          <label>
            Mínimo: 
            <input
              type="number"
              value={filters.precoMin}
              onChange={(e) => handlePriceChange('Min', e.target.value)}
              min="0"
            />
          </label>
          <label>
            Máximo:
            <input
              type="number"
              value={filters.precoMax}
              onChange={(e) => handlePriceChange('Max', e.target.value)}
              min="0"
            />
          </label>
        </div>
      </div>

      <div className="content">
        <div className="notebook-container">
          {notebooksFiltrados.length === 0 ? (
            <strong>
              <p>Nenhum notebook encontrado.</p>
            </strong>
          ) : (
            notebooksFiltrados.map(notebook => (
              <div key={notebook.id} className="notebook-card">
                <img src={notebook.imagem} alt="" />
                <h2>{notebook.nome}</h2>
                <p>{notebook.descricao}</p>
                <p><span>R${notebook.preco}</span></p>
                <button className="comprar-button">Comprar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notebooks;
