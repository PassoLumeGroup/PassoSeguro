import React from 'react';
import './Navbar.css';
import { FiMap, FiInfo, FiLifeBuoy, FiUser, FiLogOut } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">

      <div className="div-primary-nav">
        <div className="div-conteudo-nav">

          {/* LOGO */}
          <div className="logo-container">
            <Link to="/mapa" className="logo-link">
              <img 
                src="/assets/logo.png" 
                alt="Logo PassoSeguro" 
                className="logo-navbar"
              />
            </Link>
          </div>

          {/* NAVEGAÇÃO */}
          <nav className="nav-container">

            <ul className="nav-links">

              <NavLink 
                to="/mapa" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <FiMap size={18} />
                <span>Mapa</span>
              </NavLink>

              <li>
                <NavLink 
                  to="/sobre" 
                  className={({ isActive }) => 
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  <FiInfo size={18} />
                  <span>Sobre</span>
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/suporte" 
                  className={({ isActive }) => 
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  <FiLifeBuoy size={18} />
                  <span>Suporte</span>
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/perfil" 
                  className={({ isActive }) => 
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  <FiUser size={18} />
                  <span>Perfil</span>
                </NavLink>
              </li>

              {/* Divisor */}
              
              <div className='nav-divider'></div>
            </ul>

            {/* Logout separado */}
            <button 
              className="logout-button" 
              aria-label="Sair"
              onClick={() => navigate('/')}
            >
              <FiLogOut size={20} />
            </button>

          </nav>

        </div>
      </div>

    </header>
  );
};

export default Navbar;