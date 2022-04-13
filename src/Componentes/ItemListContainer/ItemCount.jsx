import React, { useState } from "react";
import {Button} from "react-bootstrap";

export default function ItemCount({stock}) {

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
    function onAdd() {
        alert('agregaste ' + count + ' unidades al carrito')
    }
    
    return (
        <>
            <Button disabled={count === 1} onClick={subs} variant="danger">-</Button>
            <p>{count}</p>
            <Button disabled={count === stock} onClick={adding} variant="success">+</Button>{' '}
            <Button onClick={onAdd} variant="primary">Agregar al carrito</Button>{' '}
        </>
    );
  }
  
  
