import React from "react";
import "../ItemListContainer/ItemDetail.css"
import { Card } from "react-bootstrap";





export default function ItemDetail({Nombre, Img, Descripcion, Precio}){





    return (
        <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>{Nombre}</Card.Title>
    <Card.Text>{Descripcion}</Card.Text>
    <Card.Text>{Precio}</Card.Text>
  </Card.Body>
</Card>
        </>
    )
    
}