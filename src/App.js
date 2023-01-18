import "./App.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/navbar/navbar" //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer"; 
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemdetailcontainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
export default function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/categoria/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/contacto" element={<div><h1>Holi xd</h1></div>} />
        <Route path="/checkout" element={<div><h1>Compralo ya</h1></div>} />

      
      <Route path="*" element={<h2>ERROR 404. Página no encontrada. </h2>}/>
      </Routes>
    </BrowserRouter>

   
    </>
  );
}