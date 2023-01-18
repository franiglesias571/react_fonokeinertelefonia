import Item from '../item/item';
import React from 'react';

const ItemList = ({telefonos}) => {
    return (
       <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        { telefonos.map(telefono => <Item key={telefono.id} info={telefono} />)}
       </div>
    );
}

export default ItemList;