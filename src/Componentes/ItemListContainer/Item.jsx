import React from "react";
import ItemCount from "./ItemCount";
import {Card} from "react-bootstrap";
import "../ItemListContainer/Item.css";


export default function Item({id, nombre, precio, img}) {

  
  
  return (
    <>
<Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
    $ {precio}
    </Card.Text>
    <ItemCount stock={10}/>
  </Card.Body>
</Card>    
    </>
  );
}