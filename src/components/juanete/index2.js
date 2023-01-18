import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {PropertyDetail} from "../ItemDetailContainer/propertydetail"

function Product(){
    const {id} = useParams()
    const [data, setData] = useState({Marca: ""})

useEffect(() => {
    let thisData = PropertyDetail.filter((f) => id === f.Id)
    console.log("data",thisData)
    setData(thisData)
},[])

    console.log("id",id)
    return <><p>{data.Marca}</p></>
}

export default Product