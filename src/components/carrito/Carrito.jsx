import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {PropertyDetail} from '../../services/propertydetail'
import '../carrito/Carrito.css'


function Carrito ({preorder, setPreorder, cart, setCart, notify}) {
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
        useEffect(() => {
            setCart(PropertyDetail.map((d, k) => {
                if(preorder[d.Id]) {
                    setTotal(t => t + d.Precio * preorder[d.Id])
                    return({
                            id: d.Id,
                            modelo: d.Modelo,
                            imagen: d.Imagen,
                            cantidad: preorder[d.Id],
                            precio: d.Precio,
                     })
                }   
            }))
        }, [preorder])
        
        console.log("aca", PropertyDetail)
        
        const deletePurchase = (e) => {
            const targetId = e.target.id
            setPreorder({...preorder, [targetId]: 0})
            setTotal(t => t - preorder[targetId] * PropertyDetail.filter(f => f.Id == targetId)[0].Precio  )
            
            sessionStorage.setItem("preorder", JSON.stringify(preorder))
            };
            console.log(PropertyDetail.filter(f => f.Id == 1))

    return(<main className="main">
            {cart.map((i, k) => {
                if(i !== undefined) return (
                    <div key={k} className="tabla_compras">
                <p>{i.modelo}</p>
                <img src={i.imagen }className="imagen_"></img>
                <p>${i.precio * i.cantidad}</p>
                <p> {i.cantidad} unidades.</p>
                <button id={i.id} onClick={(e) => deletePurchase(e)}>x</button>
                </div>
            
                )
            })}
          <div className="precio_confirmacion_compra">
            <p>Total a pagar: ${total}</p>
            <button onClick={() => {
                setPreorder({})
                setTotal(0)
                navigate("/felicitaciones") 
                }}> Compra ya!  </button>
            </div>
    </main>)
}

export default Carrito