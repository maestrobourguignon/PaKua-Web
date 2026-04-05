
import { useEffect, useState } from 'react';
import './footer.css'

interface FooterProps {
  mensaje: string;
  info?: string // O el tipo que sea mensaje
}
export const Footer = ({ mensaje, info }: FooterProps) => {
  const [btnMsg, setBtnMsg] = useState('Consultá por más información');

  useEffect(() => {
    if (info) {
      switch (info) {
        case "masajes":
        case "ventosas":
        case "cursosterapeuticos":
        case "cursosmarciales":
        case "actividadesterapeuticas":
          setBtnMsg('Consultá por más información');
          break;
        default:
          break;
      }
    }
  }, [info]);
  return (
    <div className="footer">
      <section className="footer-section alt-bg">
        <h2>Escribinos para una atención personalizada</h2>

        <p><a href={mensaje} target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp color-icono" ></i> 381 513-0161</a></p>
        <p>
          <a href="https://maps.app.goo.gl/cXNuieoAoaoR3Jtd8" target="_blank" rel="noopener noreferrer"><i className="bi bi-geo-alt color-icono"></i> Aragón 279 - Yerba Buena, Tucumán, Argentina</a>
        </p>
        <p>
          <a href="https://maps.app.goo.gl/FvEZBCx3vwnu8YfY7" target="_blank" rel="noopener noreferrer"><i className="bi bi-geo-alt color-icono"></i> Av. Juan B. Justo 1146, 1° piso - San Miguel de Tucumán, Tucumán, Argentina</a>
        </p>
        <div className="separador-2rem">a</div>
        <a href={mensaje} className="msg-button">{btnMsg}</a>

      </section>


      <footer>
        <p>&copy; 2025 Espacio Interdiciplinario de Artes y Terapias Orientales - PaKua</p>
        <p>Todos los derechos reservados - <a href="https://taotechlab.com.ar" target="_blank" rel="noopener noreferrer">Desarrollado por Tao Tech Lab</a></p>
      </footer>
    </div>
  )
}