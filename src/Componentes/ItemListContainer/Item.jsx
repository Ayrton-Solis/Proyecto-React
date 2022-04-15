import React from "react";
import ItemCount from "./ItemCount";
import {Card} from "react-bootstrap";
import "../ItemListContainer/Item.css";
import { Link } from "react-router-dom";


export default function Item({id, nombre, precio, img}) {

  
  
  return (
    <>

<Card className="card" key={id} style={{ width: '18rem' }}>
<Link to="/Detalle:id">
  <Card.Img variant="top" src={img} />
    <Card.Title>{nombre}</Card.Title>
    </Link>
    <Card.Body>
    <Card.Text>
    $ {precio}
    </Card.Text>
    <ItemCount stock={10}/>
  </Card.Body>
</Card>

    </>
  );
}