import React, {useEffect, useState } from 'react';
import Title from '../title/title';
import ItemCount from '../itemcount/itemcount';
import ItemList from '../itemlist/itemlist';


export const PropertyDetail = [  

    {
        Id:"1",
        Marca:"Huawei",
        Modelo: "Huawei Nova 9",
        Imagen:"./Img_property/huawei_nova9.jpg",
        Precio:"Desde $8500",
        Tamaño:"6,57 pulgadas",
        Span:"Popular Properties", //EL NOMBRE DEL SPAN CONECTA AL PROPERTY.JSX POR EL SPAN NO OLVIDAR! 
        },
    
    
    { Id:"2",
    Marca:"Apple",
    Modelo: "iPhone14",
    Imagen:"./Img_property/iphone_14.jpg",
    Precio:"Desde $53.615,55",
    Tamaño:"6,69 pulgadas",
    Span:"Popular Properties"},

    { Id:"3",
    Marca:"Xiaomi",
    Modelo: "Pocox3 Pro ",
    Imagen:"./Img_property/pocox3_pro.jpg",
    Precio:"Desde $",
    Tamaño:" pulgadas",
    Span:""}
    
];
