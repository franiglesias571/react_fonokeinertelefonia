import './itemstyles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({info}) => {
    const navigate = useNavigate()
    return(
        <a  className='telefono'>
            <p onClick={() => navigate(`/id=${info.Id}`)}>{info.Modelo}</p>
            <img onClick={() => navigate(`/id=${info.Id}`)} src={info.Imagen} alt=''/>
            <p onClick={() => navigate(`/checkout`)}>{info.Precio}</p>
        </a>
    );
}

export default Item;