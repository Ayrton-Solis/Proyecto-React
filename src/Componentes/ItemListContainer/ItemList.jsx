import React from "react";
import Item from "./Item";



export default function ItemList({productos}) {
    return (
        productos.map(productos => (
            <Item id={productos.id} nombre={productos.nombre} precio={productos.precio} img={productos.img}/>
        ))
    );
  }
  
