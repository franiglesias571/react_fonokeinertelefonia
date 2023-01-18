import "./style.css";
import ItemCount from "../itemcount/itemcount";
import ItemList from "../itemlist/itemlist";
import {PropertyDetail} from "../ItemDetailContainer/propertydetail"
// import { useEffect, useState } from "react";

function Card({count, setCount}){
    // useEffect(() => {
    //     alert("hola")
    // }, [])
    return <div className="lista">
        <ItemCount  initial={3} stock={5} count={count} setCount={setCount}/>
        <ItemList data={PropertyDetail}/>
    </div>
}


export default Card;  