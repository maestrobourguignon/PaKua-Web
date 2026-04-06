import './homePage.css'
import { DisplayMaestrias } from "../../components/home/displayMaestrias";
import { Navbar } from "../../components/general/navbar";
import { Footer } from "../../components/general/footer";
import { WhatsappBtn } from "../../components/general/whatsappBtn";
import { contacto } from '../../components/general/contacto'
import { Carousel } from "../../components/home/carousel";
import { AliadosComponent } from "../../components/general/aliadosComponent";
import { useEffect, useState } from 'react';


export interface UrlProps {
  apiUrl: string;
  imgLink: string;
}

export const HomePage = ({ apiUrl, imgLink }: UrlProps) => {

  const [maestriasTerapeuticas, setMaestriasTerapeuticas] = useState([]);
  const [maestriasMarciales, setMaestriasMarciales] = useState([]);
  const [cursosTipos, setCursosTipos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}contenido/especial/emplastos`)
      .then(response => response.json())
      .then(data => setMaestriasTerapeuticas(data))
      .catch(error => console.error('Error fetching terapeuticas:', error));
    fetch(`${apiUrl}contenido/categoria/disciplina%20marcial`)
      .then(response => response.json())
      .then(data => setMaestriasMarciales(data))
    fetch(`${apiUrl}contenido/especial/cursos`)
      .then(response => response.json())
      .then(data => setCursosTipos(data))
      .catch(error => console.error('Error fetching marciales:', error));

    setLoading(false)
  }, [loading]);

  return (
    <>{loading ? <></> :
      <div className="homepage-container">
        {/* <Portada/> */}
        {/* <HomeNavbar/> no va por ahora */}
        <Navbar mensaje={contacto.general.link} />

        {/* <Banner/> */}
        <Carousel />

        <DisplayMaestrias maestrias={maestriasMarciales} tipo='Marciales' imgLink={imgLink} />
        <DisplayMaestrias maestrias={maestriasTerapeuticas} tipo='Terapeuticas' imgLink={imgLink} />
        {/* <DisplayMaestrias maestrias={maestriasMarciales} tipo='Marciales'/> */}
        <DisplayMaestrias maestrias={cursosTipos} tipo='Cursos' fullScreen imgLink={imgLink} />

        <AliadosComponent apiUrl={`${apiUrl}aliados/all`} exceptId={2} />

        {/* <section id="nosotros" className="section">
    <h2>Una Escuela con Tradición</h2>
    <p>Desde hace más de 20 años compartimos la enseñanza de las artes orientales en un ambiente de respeto, compromiso y crecimiento personal.</p>
  </section> */}

        <Footer mensaje={contacto.general.link} />

        <WhatsappBtn mensaje={contacto.general.link} />
      </div>
    }
    </>
  )
};