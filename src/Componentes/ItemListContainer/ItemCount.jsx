import React, { useState, useContext } from "react";
import {Button} from "react-bootstrap";
import { CartContext } from "../CartContext";

export default function ItemCount({stock, agregar, Producto}) {

    const { AddToCart } = useContext(CartContext)

    const [count, setCount] = useState(1);
    
    function adding() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function subs() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    
    return (
        <>
            <Button disabled={count === 1} onClick={subs} variant="danger">-</Button>
            <p>{count}</p>
            <Button disabled={count === stock} onClick={adding} variant="success">+</Button>{' '}
            <Button onClick={() => {agregar(count); AddToCart({ ...Producto, count })}} variant="primary">Agregar al carrito</Button>{' '}
        </>
    );
  }
  
  
