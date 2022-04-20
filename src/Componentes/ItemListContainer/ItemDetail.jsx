import React, { useState } from "react";
import "../ItemListContainer/ItemDetail.css"
import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";





export default function ItemDetail({id, nombre, descripcion, precio, img}){

  const [Numero, setNumero] = useState(1);
  const [Cambiar, setCambiar] = useState(true);

  const agregar = (count) => {
    setNumero(count);
    setCambiar(false);
  }
  console.log(Numero);



    return (
        <>
<Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ img } />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
    $ {precio}
    </Card.Text>
    <Card.Text>
        {descripcion}
    </Card.Text>
    {Cambiar ? <ItemCount stock={10} agregar={agregar}/> : <Link to={'/cart'}>Ir al carrito</Link>}
  </Card.Body>
</Card>   
        </>
    )
    
}