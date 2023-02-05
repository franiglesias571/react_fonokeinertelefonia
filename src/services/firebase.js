import { initializeApp } from "firebase/app"; // SDK => Soft dev Kit 
import {collection, getFirestore, getDocs} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBDAokhmRZgbxRN-FBma2to9NT8OidSUn0",
    authDomain: "fonokeiner-telefonia-reactjs.firebaseapp.com",
    projectId: "fonokeiner-telefonia-reactjs",
    storageBucket: "fonokeiner-telefonia-reactjs.appspot.com",
    messagingSenderId: "298637129078",
    appId: "1:298637129078:web:bf79e80fe5d9d8157d3657"
  };

const app = initializeApp(firebaseConfig);

const basededatos = getFirestore(app);

export function  obtenerProduct(){
// aca pedimos todos los documentos xd 
// referimos al producto
  const productsRef = collection (basededatos, "PropertyDetail");
  // 2 -> obtenemos con getdocs todos los documentos del firebase
  getDocs(productsRef).then((snapshot) => {

    const title = snapshot.docs.map((elem) => elem.data());
    console.log(title)
  });
    }



    export async function obtenerProduct() {
      const productsRef = collection (basededatos, "products");
      const snapshot = await getDocs(productsRef)

      const title = snapshot.docs.map ((elem)   => elem.data());
      console.log (title);
    }

export default basededatos;