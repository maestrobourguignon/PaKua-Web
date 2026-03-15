import './whatsappBtn.css';

interface WhatsappBtnProps {
  mensaje: string;
  }

  export const WhatsappBtn = ({mensaje}: WhatsappBtnProps) => {
  return (
    <a className="whatsapp-btn-component" href={mensaje} target="_blank" rel="noopener noreferrer">
      <i className="bi bi-whatsapp icono-grande2" ></i>
    </a>
  )
}