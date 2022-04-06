import React, { useState } from "react";
import {Button} from "react-bootstrap";

export default function ItemCount({stock}) {

    const [count, setCount] = useState(0);
    
    function adding() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function subs() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function onAdd() {
        alert('agregaste ' + count + ' unidades al carrito')
    }
    
    return (
        <>
            <Button onClick={subs} variant="danger">-</Button>
            <p>{count}</p>
            <Button onClick={adding} variant="success">+</Button>{' '}
            <Button onClick={onAdd} variant="primary">Agregar al carrito</Button>{' '}
        </>
    );
  }
  
  
  