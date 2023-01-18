import React, {useEffect, useState } from 'react';

import ItemCount from '../itemcount/itemcount';
import ItemList from '../itemlist/itemlist';


// DONDE SEA QUE USE 
export const ItemListContainer = ( {telefonos}  ) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(telefonos); 
            }, 500);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd= (quantity) => {
        
    }

    return (

        <>
        {/* <Title greeting= {text} /> IMPORT DEL title.JSX DE CARPETA TITLE */}
        <ItemCount initial={3} stock={5} onAdd={onAdd} />
        {/* indicador del carrito de compras*/}
        <ItemList data={telefonos}/>
        </> 
    );
}
