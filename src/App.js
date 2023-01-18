import "./App.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/navbar/navbar" //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer"; //CONTENEDOR DEL CARTWIDGET
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PropertyDetail} from "./components/ItemDetailContainer/propertydetail"
import Card from "./components/juanete/index";
import { useState } from "react";
import Product from "./components/juanete/index2";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        {/* <Route path="/" element={<ItemListContainer telefonos={PropertyDetail}/>} />  */}
        <Route path="/" element={<Card count={count} setCount={setCount}/>} /> {/* ESA ULTIMA /> ENCIERRA EL ROUTE*/}
        <Route path="/contacto" element={<div><h1>Holi xd</h1></div>} />
        <Route path="/:id" element={<Product/>} />
        <Route path="/checkout" element={<div><h1>Compralo ya</h1></div>} />

      
      <Route path="*" element={<h2>ERROR 404. Página no encontrada. </h2>}/>
      </Routes>
    </BrowserRouter>

   
    </>
  );
}