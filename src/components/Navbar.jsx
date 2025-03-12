import { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegação
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Tech World</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#">Produtos</a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/smartphone">Smartphone</Link></li>
              <li><a href="#">Notebooks</a></li>
              <li><a href="#">Smartwatch</a></li>
              <li><a href="#">Acessórios</a></li>
            </ul>
          )}
        </li>

        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#"><img id="icon-cesta" src="src/assets/cesta.png" alt="" /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
