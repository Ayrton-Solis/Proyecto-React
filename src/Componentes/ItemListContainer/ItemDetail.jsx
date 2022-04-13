import React from "react";
import "../ItemListContainer/ItemDetail.css"





export default function ItemDetail({Producto}){





    return (
        <>
        <div className="itemDetail">
        <img src={Producto.image} alt="Producto.image" />
        <div className="detalles">
        <h4>Titulo: {Producto.title}</h4>
        <h4>Precio: {Producto.price}</h4>
        <h4>Descripcion: {Producto.description}</h4>
        </div>
        </div>    
        </>
    )
    
}