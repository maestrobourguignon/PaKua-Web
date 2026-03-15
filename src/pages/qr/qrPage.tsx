import './qrPage.css'
import { QrButton } from "../../components/qr/qrButtnon";
import whatsapp from '../../assets/iconos redes/wp.png';
import instagram from '../../assets/iconos redes/Insta.png';
import maps from '../../assets/iconos redes/maps.png';
import {contacto} from '../../components/general/contacto'


 export const QrPage = () => {
  const botones = [
  {
    icon: whatsapp,
    text:'WhatsApp',
    link: contacto.general.link
  },
  {
    icon: instagram,
    text:'Instagram PaKua',
    link:'https://www.Instagram.com/recintodepakua/'
  },
  {
    icon: instagram,
    text:'Instagram MYTO',
    link:'https://www.Instagram.com/masajes_orientales/'
  },
  {
    icon: instagram,
    text:'Instagram MYTO Acupuntura',
    link:'https://www.instagram.com/acupuntura_tucuman'
  },
  {
    icon: maps,
    text:'Direccion Yerba Buena',
    link:'https://maps.app.goo.gl/g3xYQbQJeKcaBonR8'
  },
  {
    icon: maps,
    text:'Direccion Capital',
    link:'https://maps.app.goo.gl/7HomB7jTguTCXxwx8'
  },
]
  return(
    <div className="qr-page-container">
      <h1 className="titulo">Nuestras redes sociales</h1>
      <div className="botones-container">
        {botones.map((boton, index) => (
          <QrButton key={index} data={boton} />
        ))}
      </div>
    </div>
  )
}