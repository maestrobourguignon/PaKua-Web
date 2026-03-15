import { useEffect, useState } from "react"; 
import './homeNavbar.css'

export const HomeNavbar = () => {
   const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        // setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <div className={`portada-container ${scrolled ? "collapsed" : ""}`}>
      <header className="portada">
        {/* <img src="/assets/logo-pakua.png" alt="Logo de la escuela" className="logo"/>  */}
        <h1>Espacio Interdiciplinario de Artes y Terapias Orientales</h1>
        <p>Armonía · Energía · Disciplina</p>
        <nav>
          <ul>
            <li><a href="#artes">Artes Marciales</a></li>
            <li><a href="#bienestar">Bienestar</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="repeating-wave"></div>
    </div>  
  )
}