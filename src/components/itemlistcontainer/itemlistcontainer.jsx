import React from 'react';
import Title from '../title/title';
import ItemCount from '../itemcount/itemcount';

export const ItemListContainer = ( {text}  ) => {
    
    const onAdd= (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
        <Title greeting= {text} /> {/*IMPORT DEL title.JSX DE CARPETA TITLE*/}
        <ItemCount initial={3} stock={5} onAdd={onAdd} />                   {/* indicador del carrito de compras*/}
        </> 
    );
}
