import React from "react";
import Item from "./Item";



export default function ItemList({productos}) {
    return (
        productos.map(productos => (
            <Item key={productos.id} nombre={productos.title} precio={productos.price} img={productos.image}/>
        ))
    );
  }
  
