import React from "react";
import carrito from "../Imagenes/carrito.png";
import "../cartwidget.css"



export default function CartWidget() {
    
  return (
    <>
      <img src={carrito} alt="carritoDeCompras" width={60}/>
    </>
  );
}


