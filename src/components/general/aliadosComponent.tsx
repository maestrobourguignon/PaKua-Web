import { useState, useEffect } from 'react';
import './aliadosComponent.css';

export interface AliadosProps {
  className?: string;
  exceptId?: number;
  apiUrl?: string;
}

interface Aliado {
  id: number;
  nombre: string;
  link: string;
  imagen: string;
  circular?: boolean;
}

const defaultAliados: Aliado[] = [
  {
    id: 1,
    nombre: 'Myto',
    link: 'https://www.terapiasmyto.com.ar',
    imagen: 'https://www.terapiasmyto.com.ar/logo.png',
    circular: true,
  },
  {
    id: 2,
    nombre: 'Espacio Pakua',
    link: 'https://www.espaciopakua.com.ar',
    imagen: 'https://www.espaciopakua.com.ar/uploads/aliados/bagua.png',

  },
  {
    id: 3,
    nombre: 'Club Satoshi',
    link: 'https://instagram.com/club.satoshi',
    imagen: 'https://www.espaciopakua.com.ar/uploads/aliados/club-satoshi.png',
    circular: true,
  },
  {
    id: 4,
    nombre: 'Lecfer',
    link: 'https://instagram.com/lecferegresados',
    imagen: 'https://www.espaciopakua.com.ar/uploads/aliados/lecfer.png',
    circular: true,
  },
  {
    id: 5,
    nombre: 'El Próximo',
    link: 'https://www.elproximo.com.ar',
    imagen: 'https://www.espaciopakua.com.ar/uploads/aliados/el-proximo.png',
    circular: true,
  },
];

export const AliadosComponent = ({
  className = '',
  exceptId,
  apiUrl = 'https://www.terapiasmyto.com.ar/api/aliados/all'
}: AliadosProps) => {
  const [aliados, setAliados] = useState<Aliado[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAliados = async () => {
      try {
        const url = exceptId
          ? `${apiUrl}/${exceptId}`
          : apiUrl;

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          const aliadosConCircular = data.map((item: Aliado) => ({
            ...item,
            circular: item.circular ?? true
          }));
          setAliados(aliadosConCircular);
        } else {
          setAliados(defaultAliados);
        }
      } catch (error) {
        console.error('Error fetching aliados:', error);
        setAliados(defaultAliados);
      } finally {
        setLoading(false);
      }
    };

    fetchAliados();
  }, [exceptId, apiUrl]);

  if (loading) {
    return null;
  }

  // Duplicar aliados para efecto infinito
  const duplicatedAliados = [...aliados, ...aliados];

  return (
    <section className={`aliados-section ${className}`}>
      <div className="aliados-container">
        <h2 className="aliados-title">Aliados Estratégicos</h2>

        <div className="aliados-carousel-box">
          <div className="aliados-carousel-wrapper">
            <div className="aliados-carousel">
              {duplicatedAliados.map((aliado, index) => (
                <div key={`${aliado.id}-${index}`} className="aliados-item">
                  <a
                    href={aliado.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`aliados-logo-link ${aliado.circular ? 'circular' : ''}`}
                  >
                    {aliado.imagen ? (
                      <img src={aliado.imagen} alt={aliado.nombre} className="aliados-img" />
                    ) : (
                      <span className="aliados-placeholder-text">{aliado.nombre}</span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};