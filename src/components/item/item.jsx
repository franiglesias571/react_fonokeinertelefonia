import './itemstyles.css';
import React from 'react';


const Item = ({info}) => {
    return(
        <a href="*" className='telefono'>
            <img src={info.image} alt=''/>
            <p>{info.title}</p>
        </a>
    );
}

export default Item;