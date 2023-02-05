import "./App.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/navbar/navbar" //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer"; 
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemdetailcontainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import Carrito from "./components/carrito/Carrito";
import { ToastContainer, toast } from 'react-toastify';






export default function App() {
  const [preorder, setPreOrder] = useState({});
  const [cart, setCart] = useState([{
    marca: "",
    cantidad: 0,
    precio: ""
  }])
  const notify = () => toast("Gracias!");


  useEffect(() => {
    let storagedPreOrder = JSON.parse(sessionStorage.getItem("preorder"));
    if (storagedPreOrder) setPreOrder(storagedPreOrder);
  }, []);

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer setPreOrder={setPreOrder} preorder={preorder}/>} />
        <Route path="/contacto" element={<div><h1>Holi xd</h1></div>} />
        <Route path="/carrito/" element={<Carrito preorder={preorder} setPreorder={setPreOrder} cart={cart} setCart={setCart} notify={notify}/>} />
        <Route path="/felicitaciones" element={<main><p className="">Gracias por su compra</p></main>} />
        <Route path="*" element={<h2>ERROR 404. Página no encontrada. </h2>}/>
      </Routes>
      <ToastContainer />

    </BrowserRouter>
    </>
  );
}