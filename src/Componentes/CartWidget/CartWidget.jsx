import React from "react";
import carrito from "../CartWidget/carrito.png";
import "../CartWidget/cartwidget.css";



export default function CartWidget({ count }) {
    
  return (
    <>
      <img src={carrito} alt="carritoDeCompras" width={60}/> <>{count}</>
    </>
  );
}