import { useEffect, useState } from 'react';
import { Navbar } from '../../components/general/navbar';
import { Footer } from '../../components/general/footer';
import { DisplayMaestrias } from '../../components/home/displayMaestrias';
import { WhatsappBtn } from '../../components/general/whatsappBtn';
import { contacto } from '../../components/general/contacto';
import './cursosPage.css';

interface UrlProps {
  apiUrl: string;
  imgLink: string;
}

// Función para obtener el estilo de object-position
const getImageStyle = (focusPosition?: string): React.CSSProperties => {
  if (!focusPosition) return {};

  if (focusPosition === 'top') return { objectPosition: 'center top' };
  if (focusPosition === 'center') return { objectPosition: 'center center' };
  if (focusPosition === 'bottom') return { objectPosition: 'center bottom' };

  const num = Number(focusPosition);
  if (!isNaN(num)) {
    const verticalPos = 50 + num;
    return { objectPosition: `center ${verticalPos}%` };
  }

  return {};
};

export const CursosPage = ({ apiUrl, imgLink }: UrlProps) => {
  const [cursosTerapeuticos, setCursosTerapeuticos] = useState<any[]>([]);
  const [cursosMarciales, setCursosMarciales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const heroConfig = {
    imagen: '/uploads/carrusel/cursosMarciales.png',
    focusPosition: '-15'
  };

  useEffect(() => {
    // Fetch cursos terapéuticos
    fetch(`${apiUrl}contenido/categoria/curso%20terapeutico`)
      .then(response => response.json())
      .then(data => setCursosTerapeuticos(data))
      .catch(error => console.error('Error fetching cursos terapeuticos:', error));

    // Fetch cursos marciales
    fetch(`${apiUrl}contenido/categoria/curso%20marcial`)
      .then(response => response.json())
      .then(data => setCursosMarciales(data))
      .catch(error => console.error('Error fetching cursos marciales:', error));

    setLoading(false);
  }, [apiUrl]);

  return (
    <>
      <Navbar mensaje={contacto.general.link} />

      {/* Hero Section */}
      <div className="cursos-hero">
        <img
          src={heroConfig.imagen}
          alt="Cursos"
          className="cursos-hero-img"
          style={getImageStyle(heroConfig.focusPosition)}
        />
        <div className="cursos-hero-overlay"></div>
        <div className="cursos-hero-content">
          <h1 className="cursos-hero-title">Capacitaciones y Cursos</h1>
          <p className="cursos-hero-tagline">Formación Profesional en Técnicas Orientales</p>
          <p className="cursos-hero-desc">
            Descubrí nuestras opciones de formación integral, tanto en disciplinas marciales como en terapias orientales.
          </p>
          <a href={contacto.general.link} className="cursos-hero-btn">
            ¡Inscribite Ahora!
          </a>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          {cursosMarciales.length > 0 && (
            <DisplayMaestrias
              maestrias={cursosMarciales}
              tipo="cursos-marciales"
              // fullScreen
              imgLink={imgLink}
            />
          )}

          {cursosTerapeuticos.length > 0 && (
            <DisplayMaestrias
              maestrias={cursosTerapeuticos}
              tipo="cursos-terapeuticos"
              // fullScreen
              imgLink={imgLink}
            />
          )}

        </>
      )}

      <Footer mensaje={contacto.general.link} />
      <WhatsappBtn mensaje={contacto.general.link} />
    </>
  );
};