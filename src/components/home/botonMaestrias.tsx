import './botonMaestrias.css'

interface BotonMaestriasProps {
  onClick?: () => void; // El ? lo hace opcional por si acaso
  titulo: string;
  descripcion: string;
  icono: string;
  horizontal?: boolean; // El ? lo hace opcional
  tipo?: string
} 

export const BotonMaestrias = ({ onClick, titulo, descripcion, icono, horizontal, tipo }: BotonMaestriasProps) => {
  return (
    <div className={`boton-maestrias ${titulo==='' ? 'boton-invisible' :''}`} onClick={onClick}>
      <h2 className="over">{titulo}</h2>
      {tipo==='cursos-terapeuticos'||tipo==='cursos-marciales'?
      <></>:
      <p className="over">{descripcion}</p>}
      <img src={icono} alt="" className={`icono-maestria ${horizontal ? "icono-horizontal" : ""}`}/>
      <img src={icono} alt="" className="imagen-maestria"/>

    </div>
  );
}
