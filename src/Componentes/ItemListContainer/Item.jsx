import React from "react";
import {Card} from "react-bootstrap";
import "../ItemListContainer/Item.css";
import { Link } from "react-router-dom";


export default function Item({id, nombre, precio, img}) {

  
  
  return (
    <>
<Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ img } />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
    $ {precio}
    </Card.Text>
    <Link to={`Item/${id}`}>Ver detalles</Link>
  </Card.Body>
</Card>    
    </>
  );
}