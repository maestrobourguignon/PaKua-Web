import "./displayMaestrias.css";
import { BotonMaestrias } from "./botonMaestrias";

interface MaestriaItem {
  contenido: string;
  sinopsis: string;
  slug: string;
  icon_url: string;
  horizontal?: boolean; // <--- AGREGA ESTA LÍNEA
}

interface DisplayMaestriasProps {
  maestrias: MaestriaItem[];
  tipo: string;
  fullScreen?: boolean; // <--- El signo ? arregla el error TS2741 en homePage
  imgLink:string
}

export const DisplayMaestrias = ({ maestrias, tipo, fullScreen, imgLink }: DisplayMaestriasProps) => {
  

  return (
    <section className={` alt-bg ${fullScreen ? "fullSection" : "section"}`}>
      <h2>
        {(() => {
          switch (tipo) {
            case "cursos-terapeuticos":
              return "Nuestros Cursos Terapéuticos";
            case "cursos-marciales":
              return "Nuestros Cursos Marciales";
            case "actividades-terapeuticas":
              return "Nuestras Actividades Terapéuticas";
            case "Cursos":
              // return "Nuestros Cursos";
              return "Cursos y Capacitaciones";
            default:
              return `Disciplinas ${tipo}`;
          }
        })()}
      </h2>
      <div className="grid">
        {maestrias.map((maestria, index) => (
          <BotonMaestrias
            key={index}
            titulo={maestria.contenido}
            descripcion={maestria.sinopsis}
            onClick={() => (window.location.href = `/${maestria.slug}`)}
            icono={imgLink + maestria.icon_url} // Asegúrate de que esta ruta sea correcta
            horizontal={maestria.horizontal}
            tipo={tipo}
          />
        ))}
      </div>
    </section>
  );
};
