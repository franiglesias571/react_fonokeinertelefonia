import "./App.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/navbar/navbar" //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer"; //CONTENEDOR DEL CARTWIDGET


export default function App() {
  return (
    <>


      <NavBar/> 
      <ItemListContainer text= 'francisco'/>

    </>
  );
}