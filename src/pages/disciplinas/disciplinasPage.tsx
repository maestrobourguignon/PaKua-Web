import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Navbar } from '../../components/general/navbar';
import { Footer } from '../../components/general/footer';
import { DisplayMaestrias } from '../../components/home/displayMaestrias';
import { WhatsappBtn } from '../../components/general/whatsappBtn';
import { contacto } from '../../components/general/contacto';
import './disciplinasPage.css';

interface UrlProps {
  apiUrl: string;
  imgLink: string;
}

// Mapeo de rutas a configuración de display
const disciplinasConfig: Record<string, {
  tipo: string;
  titulo: string;
  imagen: string;
  focusPosition?: string;
  tagline: string;
  descripcion: string;
}> = {
  '/disciplinas-marciales': {
    tipo: 'Marciales',
    titulo: 'Disciplinas Marciales',
    imagen: '/uploads/carrusel/arteMarcial.jpg',
    focusPosition: '-45',
    tagline: 'Arte Marcial y Defensa Personal',
    descripcion: 'Aprende kung fu, tai chi, defensa personal y más en un ambiente de respeto y crecimiento.¡Transforma tu cuerpo y mente con nuestras artes marciales tradicionales!'
  },
  '/disciplinas-terapeuticas': {
    tipo: 'Terapeuticas',
    titulo: 'Disciplinas Terapéuticas',
    imagen: '/uploads/carrusel/yoga.png',
    focusPosition: 'top',
    tagline: 'Yoga Integral y Terapias Orientales',
    descripcion: 'Conecta cuerpo y mente con yoga, tai chi y técnicas ancestrales.¡Descubre el bienestar integral a través de nuestras terapias orientales!'
  }
};

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

export const DisciplinasPage = ({ apiUrl, imgLink }: UrlProps) => {
  const location = useLocation();
  const [maestrias, setMaestrias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const config = disciplinasConfig[location.pathname];

  useEffect(() => {
    if (!config) {
      setLoading(false);
      return;
    }

    // Fetch según el tipo
    const fetchUrl = config.tipo === 'Marciales'
      ? `${apiUrl}categoria/disciplina marcial`
      : `${apiUrl}especial/emplastos`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        setMaestrias(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching maestrías:', error);
        setLoading(false);
      });
  }, [config, apiUrl]);

  if (!config) {
    return (
      <>
        <Navbar mensaje={contacto.general.link} />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Página no encontrada</h1>
        </div>
        <Footer mensaje={contacto.general.link} />
      </>
    );
  }

  return (
    <>
      <Navbar mensaje={contacto.general.link} />
      {/* Hero Section con imagen de fondo */}
      <div className="disciplinas-hero">
        <img
          src={config.imagen}
          alt={config.titulo}
          className="disciplinas-hero-img"
          style={getImageStyle(config.focusPosition)}
        />
        <div className="disciplinas-hero-overlay"></div>
        <div className="disciplinas-hero-content">
          <h1 className="disciplinas-hero-title">{config.titulo}</h1>
          <p className="disciplinas-hero-tagline">{config.tagline}</p>
          <p className="disciplinas-hero-desc">{config.descripcion}</p>
          <a href={contacto.general.link} className="disciplinas-hero-btn">
            ¡Empezá Ahora!
          </a>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <p>Cargando...</p>
        </div>
      ) : (
        <DisplayMaestrias
          maestrias={maestrias}
          tipo={config.tipo}
          imgLink={imgLink}
        />
      )}

      <Footer mensaje={contacto.general.link} />
      <WhatsappBtn mensaje={contacto.general.link} />
    </>
  );
};