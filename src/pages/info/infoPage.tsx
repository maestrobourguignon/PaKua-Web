import { useParams } from 'react-router';
import './infoPage.css';
import { Navbar } from '../../components/general/navbar';
import { Footer } from '../../components/general/footer';
import { Beneficio } from '../../components/info/beneficio';
// import { infoData } from '../../components/general/infoData.tsx';
import { WhatsappBtn } from '../../components/general/whatsappBtn.js';
import { DisplayMaestrias } from '../../components/home/displayMaestrias';
import Triptico from '../../components/emplastos/Triptico.js';
import { InfoSection, type InfoSectionData } from '../../components/info/infoSection';
import InfoCursos from '../../components/info/infoCursos.tsx';
import BotonFormulario from '../../components/emplastos/BotonFormulario.tsx';
import { useEffect, useState } from 'react';
import type { UrlProps } from '../home/homePage.tsx';


export const InfoPage = ({ apiUrl, imgLink }: UrlProps) => {
  const { slug } = useParams();
  const [data, setData] = useState<Partial<InfoSectionData>>({})
  const [beneficios, setBeneficios] = useState([])
  const [display, setDisplay] = useState([])
  const [loading, setLoading] = useState(true)

  // Si no hay maestría en la URL, mostramos cargando
  if (!slug) return <div>Cargando...</div>;

  const maestria = slug;

  // SOLUCIÓN: Usamos (infoData as any) para saltar la seguridad estricta de TypeScript temporalmente
  useEffect(() => {
    fetch(`${apiUrl}contenido/${slug}`, {
      method: 'GET',
      cache: 'no-store'
    })
      .then(response => response.json())
      .then(datas => setData(datas))
      .catch(error => console.error('Error fetching terapeuticas:', error));
    fetch(`${apiUrl}beneficios/${slug}`)
      .then(response => response.json())
      .then(datas => setBeneficios(datas))
    // fetch(`${apiUrl}especial/cursos`)
    //   .then(response => response.json())
    //   .then(data => setCursosTipos(data))
    //   .catch(error => console.error('Error fetching marciales:', error));

    setLoading(false)
  }, [slug]);

  if (slug === 'cursos-terapeuticos' || slug === 'cursosterapeuticos') {
    useEffect(() => {

      fetch(`${apiUrl}contenido/categoria/curso%20terapeutico`, {
        method: 'GET',
        cache: 'no-store'
      })
        .then(response => response.json())
        .then(datas => setDisplay(datas))

    }, [slug])
  } else if (slug === 'cursos-marciales' || slug === 'cursosmarciales') {
    useEffect(() => {

      fetch(`${apiUrl}contenido/categoria/curso%20marcial`, {
        method: 'GET',
        cache: 'no-store'
      })
        .then(response => response.json())
        .then(datas => setDisplay(datas))

    }, [slug])
  }


  // Si después de buscar no encontramos nada...
  if (!data) return <div className='pt-32 text-center'>No se encontró información para: {maestria}</div>;

  // ... (Aquí sigue tu return con el JSX)

  return (
    <>
      {loading ?
        <></>
        :
        <>
          <Navbar mensaje={data.mensaje_whatsapp!} />
          <div className="info-page-container">
            <div className="modern-page-container">
              <InfoSection data={data as InfoSectionData} imgLink={imgLink} />
              {(maestria === "cursos-terapeuticos" || maestria === "cursos-marciales" || maestria === "actividades-terapeuticas") ?
                <DisplayMaestrias maestrias={display} tipo={maestria} fullScreen={true} imgLink={imgLink} /> : null}
              <section id="bienestar" className="benefit-section alt-bg">
                <h2>{data.beneficio_label}</h2>
                <div className="benefit-grid">
                  {beneficios.map((beneficio: any, i: any) => (
                    <Beneficio
                      key={beneficio.titulo}
                      emoji={beneficio.emoji}
                      titulo={beneficio.titulo}
                      descripcion={beneficio.descripcion}
                      delay={i * 0.2} // 0.2s de diferencia entre cada tarjeta                      
                    />
                  ))}
                </div>
              </section>

              {maestria === 'emplastos' ?
                <div className="separador-btn">
                  <BotonFormulario texto='Inscribirse a la aplicacion de emplastos' link={data.inscripcion!} wp={false} buttonVisible={true} />
                </div>
                : null}
            </div>
          </div>

          {slug === 'emplastos' ? <Triptico data={data} wp={true} /> : null}
          {data.temario ? <InfoCursos
            linkTemario={data.temario}></InfoCursos> : null}
          <Footer mensaje={data.mensaje_whatsapp!} info={maestria} />
          <WhatsappBtn mensaje={data.mensaje_whatsapp!} />
        </>}
    </>
  );
};