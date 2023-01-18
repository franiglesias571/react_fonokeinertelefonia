//  ACA ENREALIDAD LLAMO A LA CARD DEL TELEFONO+MARCA+MODELO
import './itemstyles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({info}) => {
    const navigate = useNavigate()
    return(
        <div  className='telefono' onClick={()=> navigate(`/item/${info.Id}`)}>
            <h3 className='modelo'>{info.Modelo}</h3>
            <h3 className='modelo'>{info.Marca}</h3>
            <img src={info.Imagen} alt={info.Modelo}/>
            <h4 className='precio'>{info.Precio}</h4>
        </div>
    );
}

export default Item;