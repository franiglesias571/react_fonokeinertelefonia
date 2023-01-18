import React, {useEffect, useState } from 'react';
import {PropertyDetail} from '../ItemDetailContainer/propertydetail'
import { useParams } from 'react-router-dom';
import ItemCount from '../itemcount/itemcount';
// DONDE SEA QUE USE 
export const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState({});
    const {id}= useParams()
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(PropertyDetail); 
            }, 500);
        });
        getData.then(res => setItem(res.find((item)=> item.Id === id)));

    }, [id])
    return (

        <>
        {/* Lo ideal aca es crear otro componente ItemDetail y pasarle por props item, lo mismo que onAdd debe estar creada en ItemDetail */}
            <div>
                <h2>Detalle de :{item.Modelo}</h2>
                <img src={item.Imagen} alt={item.Modelo}/>
                <p>Marca:{item.Marca}</p>
                <p>Tamaño: {item.Tamaño}</p>
                <p>{item.Precio}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </> 
    );
}