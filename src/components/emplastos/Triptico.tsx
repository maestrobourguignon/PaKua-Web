
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Triptico.css';

// Importa tus imágenes aquí o usa las rutas locales
import imagenFrente from '../../assets/triptico/1.jpg'; 
import imagenDorso from '../../assets/triptico/2.jpg';
import BotonFormulario from './BotonFormulario';


const Triptico = ({data, wp}:any) => {
  return (
    <section className="triptico-container">
      <div className="triptico-header">
        <h2 className="triptico-title">Nuestro Tríptico Informativo</h2>
      </div>
      
      <div className="triptico-grid">
        <div className="triptico-card">
          <Zoom>
            <img 
              src={imagenFrente} 
              alt="Frente del tríptico sobre medicina china" 
              className="triptico-img" 
            />
          </Zoom>
        </div>

        <div className="triptico-card">
          <Zoom>
            <img 
              src={imagenDorso} 
              alt="Dorso del tríptico con beneficios y jornadas" 
              className="triptico-img" 
            />
          </Zoom>
        </div>
      {/* <BotonFormulario texto='Inscribirse a la aplicacion de emplastos' link='https://forms.gle/a1vYJKUASffggVrD9' buttonVisible/> */}
      </div>
      <BotonFormulario texto={data.boton} link={data.mensaje_whatsapp} wp={wp} buttonVisible={true}
      // {{texto:'Descargar Tríptico Informativo', link:'https://drive.google.com/uc?export=download&id=1WQ1bX4YIu6b2Yk2r6Y8K3JfX9vZx8X5K', buttonVisible:true}}
      /> 

    </section>
  );
};

export default Triptico;