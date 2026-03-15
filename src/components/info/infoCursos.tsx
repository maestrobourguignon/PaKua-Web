
import './infoCursos.css';

// Definimos qué datos necesita esta sección
interface InfoCursosProps {
  linkTemario: string;
  linkInscripcion?: string;
  textoTemario?: string;
  textoInscripcion?: string;
}

const InfoCursos = ({
  linkTemario,
  linkInscripcion = "https://forms.gle/ix6vheEM1KsucNv19",
  textoTemario = "Ver Folleto Informativo",
  textoInscripcion = "Formulario de Inscripción"
}:InfoCursosProps) => {
  return (
    <div className="section-container">

    <section className="seccion-cta">
      <p className='titulo-info'>¿Listo para empezar?</p>


      
      <div className="contenedor-botones contenedor-botones-info">
        {/* Botón para el PDF (Temario) */}
        <p className='subtitle-info'>Para saber más acerca del curso, no dudes en visitar nuestro folleto informativo</p>
        <a 
          href={linkTemario} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secundario btn-info"
        >
          <i className="bi bi-file-earmark-pdf icono-grande"></i> {textoTemario}
        </a>

        <div className="separador"></div>

        <p className='subtitle-info'>Llená el siguiente formulario para confirmar tu presencia al curso</p>
        {/* Botón para Inscripción (Formulario o WhatsApp) */}
        <a 
          href={linkInscripcion} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primario btn-info"
        >
          <i className="bi bi-pencil-square icono-grande"></i> {textoInscripcion}
        </a>
      </div>
    </section>
    </div>
  );
};

export default InfoCursos;