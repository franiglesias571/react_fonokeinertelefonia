import React, {useEffect, useState } from 'react';
import Title from '../title/title';
import ItemCount from '../itemcount/itemcount';
import ItemList from '../itemlist/itemlist';


const telefonos = [
    {id: 1, image: '../assets/img/huawei_nova9.jpg', title: "Huawei nova 9", brand:"Huawei"},
    {id: 2, image: '../assets/img/iphone_14.jpg', title: "iPhone 14", brand: "Apple"},
    {id: 3, image: '../assets/img/iphone_13.jpg', title: "iPhone 13", brand: "Apple"},
];
export const ItemListContainer = ( {text}  ) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(telefonos); 
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd= (quantity) => {
        
    }

    return (
        <>
        <Title greeting= {text} /> {/*IMPORT DEL title.JSX DE CARPETA TITLE*/}
        <ItemCount initial={3} stock={5} onAdd={onAdd} />                   {/* indicador del carrito de compras*/}
        <ItemList data={data}/>
        </> 
    );
}
