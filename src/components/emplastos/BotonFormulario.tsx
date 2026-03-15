// import './BotonFormulario.css'; 

interface BotonFormularioProps {
  texto?: string;
  link: string;
  buttonVisible: boolean;
  wp?: boolean;
  adapt?:boolean;
}

const BotonFormulario = ({ 
  texto, link, buttonVisible=true, wp
}:BotonFormularioProps) => {
  return (
    <a
      href={link}
      // Ahora buttonVisible sí existe. Si es true, agrega 'visible'
      className={`cta-button whatsapp-button animate-left ${buttonVisible ? 'visible' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
    {wp ? 
    <>
    <i className="bi bi-whatsapp icono-grande"></i>
    Consultá por tu Aplicación de Emplastos
    </>
    
    :
    <>
    <i className="bi bi-pencil-square icono-grande"></i>
    </>
    }
    {texto?texto:''}
    </a>
  );
};

export default BotonFormulario;