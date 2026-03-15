import { useState } from "react";
import './navbar.css';
import logo from '../../assets/logos/Logo aula virtual yin yang 200x200.png'
import { FaBars, FaTimes } from 'react-icons/fa'; // Necesitas instalar react-icons

interface NavbarProps {
  mensaje: string;
}

export const Navbar = ({ mensaje }: NavbarProps) => {
  // Estado para controlar si el drawer está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Determinar si estamos en móvil para cambiar el título (esto es una aproximación, el CSS lo define mejor)
  // Para una detección precisa, se podría usar un hook de React o un Listener, pero aquí usamos una simple suposición de "móvil"
  const isMobile = window.innerWidth < 768; // Puedes ajustar este breakpoint

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-brand">
          <a className="navbar-logo-link" href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          <a href="/">
            {/* Título condicional: "Epacio PaKua" en móvil, completo en escritorio */}
            <h1>
              {isMobile 
                ? "Espacio Interdiciplinario de Artes y Terapias Orientales"
                : "Espacio Interdiciplinario de Artes y Terapias Orientales"
              }
            </h1>
          </a>
        </div>

        {/* Botón de hamburguesa visible solo en móvil */}
        <div className="menu-icon" onClick={toggleDrawer}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navegación de escritorio (oculta en móvil) */}
        {/* <nav className="navbar-nav desktop-nav">
          <ul>  
            <li><a href="/">Inicio</a></li>
            <li><a href="https://www.aula.espaciopakua.com.ar" target="_blank" rel="noopener noreferrer">Aula virtual</a></li>
            <li><a href={mensaje} target="_blank" rel="noopener noreferrer">Contacto</a></li>
          </ul>
        </nav> */}
      </header>
      
      {/* Drawer/Menú lateral (visible solo en móvil cuando isOpen es true) */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <nav className="drawer-nav">
          <ul>
            <li onClick={toggleDrawer}><a href="/">Inicio</a></li>
            <li onClick={toggleDrawer}><a href="https://www.aula.espaciopakua.com.ar">Aula virtual</a></li>
            <li onClick={toggleDrawer}><a href={mensaje}>Contacto</a></li>
          </ul>
        </nav>
      </div>

      {/* La onda ajustada en el CSS */}
      <div className="navbar-wave"></div>
    </div>
  );
};