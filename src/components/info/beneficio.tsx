import { useEffect, useRef, useState } from 'react';
import './beneficio.css';

interface BeneficioProps {
  titulo: string;
  descripcion: string;
  delay: string | number; // Puede ser número o string según tu CSS
  emoji?:string;
}

export const Beneficio = ({ titulo, descripcion, delay, emoji }: BeneficioProps) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`beneficio ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: visible ? `${delay}s` : '0s'
      }}
    >
      <h3>{emoji}{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};
