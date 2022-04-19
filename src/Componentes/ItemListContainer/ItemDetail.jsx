import React from "react";
import "../ItemListContainer/ItemDetail.css"
import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";





export default function ItemDetail({id, nombre, descripcion, precio, img}){





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
    <ItemCount stock={10}/>
  </Card.Body>
</Card>   
        </>
    )
    
}