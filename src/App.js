import "./App.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/navbar/navbar" //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer"; //CONTENEDOR DEL CARTWIDGET
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} /> {/* ESA ULTIMA /> ENCIERRA EL ROUTE*/}
        <Route path="/contacto" element={<div><h1>Holi xd</h1></div>} />



      </Routes>
    </BrowserRouter>
   

    <NavBar/>
      <ItemListContainer/>
    </>
  );
}