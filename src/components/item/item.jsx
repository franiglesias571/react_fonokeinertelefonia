//  ACA ENREALIDAD LLAMO A LA CARD DEL TELEFONO+MARCA+MODELO
import './itemstyles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({info}) => {
    const navigate = useNavigate()
    return(
        <a  className='telefono'>
            <h3 className='modelo' onClick={() => navigate(`/id=${info.Id}`)}>{info.Modelo}</h3>
            <img onClick={() => navigate(`/id=${info.Id}`)} src={info.Imagen} alt=''/>
            <h4 className='precio' onClick={() => navigate(`/checkout`)}>{info.Precio}</h4>
        </a>
    );
}

export default Item;