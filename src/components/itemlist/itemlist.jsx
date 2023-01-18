 import Item from '../item/item';
import React from 'react';

const ItemList = ({data}) => {
    return (
        data.map(telefono =>{ return <Item key={telefono.id} info={telefono} />})
    );
}

export default ItemList;