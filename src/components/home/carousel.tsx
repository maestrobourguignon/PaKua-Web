import { useEffect, useState } from 'react';
import './carousel.css';
import { contacto } from '../general/contacto';
import logo from '../../assets/logos/Logo aula virtual yin yang 200x200.png';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const data = contacto;

  const slides = [
    {
      img: '/uploads/carrusel/arteMarcial.jpg',
      focusPosition: '-45',
    },
    {
      img: '/uploads/carrusel/ninos.png',
      focusPosition: '10',
    },
    {
      img: '/uploads/carrusel/yoga.png',
      focusPosition: 'top',
    },
    {
      img: '/uploads/taichi.jpg',
      focusPosition: '-30',
    },
    {
      img: '/uploads/acrobacia.jpg',
      focusPosition: '-20',
    },
    {
      img: '/uploads/carrusel/cursosMarciales.png',
      focusPosition: '-15',
    },
    {
      img: '/uploads/carrusel/cursosTerapeuticos.jpg',
      focusPosition: '-30',
    },
  ];

  const nextSlide = () => {
    setLoaded(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // 8 segundos por slide
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  // Obtener el estilo de object-position
  const getImageStyle = (): React.CSSProperties => {
    const pos = currentSlide.focusPosition;
    if (!pos) return {};

    if (pos === 'top') return { objectPosition: 'center top' };
    if (pos === 'center') return { objectPosition: 'center center' };
    if (pos === 'bottom') return { objectPosition: 'center bottom' };

    const num = Number(pos);
    if (!isNaN(num)) {
      const verticalPos = 50 + num;
      return { objectPosition: `center ${verticalPos}%` };
    }

    return {};
  };

  const getFocusClass = () => {
    const pos = currentSlide.focusPosition;
    if (pos === 'top') return 'hero-img-top';
    if (pos === 'center') return 'hero-img-center';
    if (pos === 'bottom') return 'hero-img-bottom';
    return '';
  };

  // Los 4 botones fijos
  const botonesFijos = [
    { texto: 'Disciplinas Marciales', link: '/disciplinas-marciales', tipo: 'primary' },
    { texto: 'Disciplinas Terapéuticas', link: '/disciplinas-terapeuticas', tipo: 'primary' },
    { texto: 'Mandanos un mensaje', link: data.general.link, tipo: 'secondary' },
    { texto: 'Cursos', link: '/cursos', tipo: 'secondary' },
  ];

  return (
    <div className="hero-carousel">
      {/* Imagen de fondo */}
      <div className={`hero-background ${loaded ? 'loaded' : ''}`}>
        <img
          src={currentSlide.img}
          alt="Banner"
          className={getFocusClass()}
          style={getImageStyle()}
          onLoad={() => setLoaded(true)}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Contenido con logo, texto y 4 botones fijos */}
      <div className="hero-content">
        <div className="hero-logo-container">
          <img src={logo} alt="PaKua" className="hero-logo" />
        </div>

        <p className="hero-tagline">
          Artes Orientales, Disciplinas y Sabiduría
        </p>

        <div className="hero-buttons-fixed">
          {botonesFijos.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              className={`hero-btn-fixed ${btn.tipo}`}
            >
              {btn.texto}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};