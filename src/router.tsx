
import { Routes, Route } from "react-router";
import { QrPage } from "./pages/qr/qrPage";
import { HomePage } from "./pages/home/homePage";
import { InfoPage } from "./pages/info/infoPage";
import { DisciplinasPage } from "./pages/disciplinas/disciplinasPage";
import { CursosPage } from "./pages/cursos/cursosPage";


export const PageRoutes = () => {
  const apiUrl = 'https://www.terapiasmyto.com.ar/api/'; // Reemplaza con tu URL real
  const imgLink = 'https://espaciopakua.com.ar/uploads/';
  return(
    <Routes>
      <Route path="/" element={<HomePage apiUrl={apiUrl} imgLink={imgLink}/>} />
      <Route path="/sedes" element={<QrPage />} />
      <Route path="/disciplinas-marciales" element={<DisciplinasPage apiUrl={apiUrl} imgLink={imgLink} />} />
      <Route path="/disciplinas-terapeuticas" element={<DisciplinasPage apiUrl={apiUrl} imgLink={imgLink} />} />
      <Route path="/cursos" element={<CursosPage apiUrl={apiUrl} imgLink={imgLink} />} />
      <Route path="/:slug" element={<InfoPage apiUrl={apiUrl} imgLink={imgLink}/>} />
    </Routes>
  )
}