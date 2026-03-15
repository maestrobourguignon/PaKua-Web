import './qrButtnon.css'

interface QrButtonProps {
  data: {
    text: string;
    link: string;
    icon: string;
    // Agrega otras propiedades que tenga 'data' aquí
  }
}

  export const QrButton = ({data}: QrButtonProps) => {
    return(
      <a href={data.link}>
        <button className="btn-qr">
          <img src={data.icon} alt=""/>
          <span className="txt-btn">{data.text}</span>
        </button>
      </a>
    )
  }