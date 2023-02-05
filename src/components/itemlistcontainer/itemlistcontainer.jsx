import React, {useEffect, useState } from 'react';
import ItemList from '../itemlist/itemlist';
import {PropertyDetail} from '../../services/propertydetail'
import { useParams } from 'react-router-dom';
// DONDE SEA QUE USE 
export const ItemListContainer = ( ) => {
    const [data, setData] = useState([]);
    const {id}= useParams()
    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(PropertyDetail); 
            }, 500);
        });
        getData.then(res => {
            if(id){
                setData(res.filter((item)=> item.Marca === id))
            }else{
                setData(res)
            }
        });

    }, [id])


    return (
        <main>
        <h1>¡Chequea nuestro catálogo!</h1>
        <ItemList telefonos={data}/>
        </main>
      
    );
}
