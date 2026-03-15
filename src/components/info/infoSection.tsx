import { useEffect, useState } from 'react';
import './infoSection.css';
import BotonFormulario  from '../emplastos/BotonFormulario.js';

export interface InfoSectionData {
titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: string;
  // Agregamos los que faltan:
  icon_url?: string;
  slug?: string;
  mensaje_whatsapp?: string;
  boton_texto?: string;
  img_url?: string;
  beneficio_label?: string;
  inscripcion?: string;
  temario?: string;
}

interface InfoSectionProps {
  data: InfoSectionData;
  imgLink: string;
}

export const InfoSection = ({data, imgLink}:InfoSectionProps) => {
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Secuencia: texto -> botón -> icono
    setTimeout(() => setTextVisible(true), 200);      // Texto primero
    setTimeout(() => setButtonVisible(true), 600);    // Botón después
    setTimeout(() => setImageVisible(true), 600);    // icono al final
  }, []);

  return (
    <div className="intro-section" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', maxWidth: 'calc(1000px + 4rem)' }}>
      <div className="text-content" style={{ flex: 1 }}>
        <h1 className={`main-title animate-left ${textVisible ? 'visible' : ''}`}>
          <img src={imgLink+ '/' + data.icon_url} className="emoji-titulo" />{data.titulo}
        </h1>
        <p className={`subtitle animate-left ${textVisible ? 'visible' : ''}`}>
          {data.subtitulo}
        </p>
        <p className={`description animate-left ${textVisible ? 'visible' : ''}`}>
          {data.descripcion}
        </p>

        {data.slug === 'emplastos' ? 
        <div className="description-container">
        <p className={`description animate-left description2 ${textVisible ? 'visible' : ''}`}>
        📆 Fechas Clave (Se recomienda asistir a las tres):<br/>
        •<strong>Viernes 16 de Enero </strong>2026<br/>
        •<strong>Lunes 26 de Enero </strong>2026<br/>
        •<strong>Domingo 15 de Febrero </strong>2026<br/><br/>

        En el formulario de Inscripción ver <strong>sedes y horarios</strong>. 
        </p>
        </div>        
        : null}

        {data.slug === 'emplastos' ? 
        <BotonFormulario texto="Inscribirse a la aplicacion de emplastos" link="https://forms.gle/drVqbzNr9Cm82wJm7" buttonVisible={true}></BotonFormulario>
        : 
        <a
          href={data.mensaje_whatsapp}
          className={`cta-button whatsapp-button animate-left ${buttonVisible ? 'visible' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp icono-grande"></i> {data.boton_texto? data.boton_texto : 'Agenda Tu Primera Clase'}
        </a>}
      </div>

      <div className={`image-content animate-right ${imageVisible ? 'visible' : ''}`} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={imgLink + data.img_url} alt="icono" className="yoga-hero-image" />
      </div>
    </div>
  );
};
