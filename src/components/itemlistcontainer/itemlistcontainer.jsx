import React from 'react';
import Title from '../title/title';

export const ItemListContainer = (props) => {
    return (
        <Title greeting= {props.text}  /> // IMPORT DEL title.JSX DE CARPETA TITLE 
    )
}
