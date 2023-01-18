import './itemcountstyles.css';
import React,{ useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd, count, setCount}) => {

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial))
        
    }, [initial])


    return(
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            
                <button disabled={stock <= 0} onClick={
                    () => {
                        onAdd (count)
                    }} >Agregar al carrito</button>
            
        </div>
    );
}

export default ItemCount;