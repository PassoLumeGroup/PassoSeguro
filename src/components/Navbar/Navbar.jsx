import React from 'react';
import './Navbar.css';
import { FiMap, FiInfo, FiLifeBuoy, FiPlusCircle, FiUser, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Lado Esquerdo - Logo */}
      <div className="logo-container">
        <span className="logo-text">
          PassoSeguro
        </span>
      </div>

      {/* Lado Direito - Links de Navegação */}
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-item">
            <FiMap size={18} />
            <span>Mapa</span>
          </li>
          
          {/* Item ativo (Sobre) */}
          <li className="nav-item active">
            <FiInfo size={18} />
            <span>Sobre</span>
          </li>
          
          <li className="nav-item">
            <FiLifeBuoy size={18} />
            <span>Suporte</span>
          </li>
          
          <li className="nav-item">
            <FiPlusCircle size={18} />
            <span>Adicionar Ponto</span>
          </li>
          
          <li className="nav-item">
            <FiUser size={18} />
            <span>Perfil</span>
          </li>

          <li>|</li>
        </ul>

        {/* Botão de Sair separadinho no final */}
        <button className="logout-button" aria-label="Sair">
          <FiLogOut size={20} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;