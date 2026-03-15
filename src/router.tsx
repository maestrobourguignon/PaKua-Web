
import { Routes, Route } from "react-router";
import { QrPage } from "./pages/qr/qrPage";
import { HomePage } from "./pages/home/homePage";
import { InfoPage } from "./pages/info/infoPage";


export const PageRoutes = () => {
  const apiUrl = 'https://www.terapiasmyto.com.ar/api/'; // Reemplaza con tu URL real
  const imgLink = 'https://espaciopakua.com.ar/uploads/';
  return(
    <Routes>
      <Route path="/" element={<HomePage apiUrl={apiUrl} imgLink={imgLink}/>} />
      <Route path="/sedes" element={<QrPage />} />
      <Route path="/:slug" element={<InfoPage apiUrl={apiUrl} imgLink={imgLink}/>} />
    </Routes>
  )
}