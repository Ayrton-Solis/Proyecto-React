import React, { useState } from "react";
import "../ItemListContainer/ItemDetail.css"
import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";





export default function ItemDetail({Producto}){

  const [Numero, setNumero] = useState(1);
  const [Cambiar, setCambiar] = useState(true);

  const agregar = (count) => {
    setNumero(count);
    setCambiar(false);
  }
  console.log(Numero);



    return (
        <>
<Card key={Producto.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ Producto.Img } />
  <Card.Body>
    <Card.Title>{Producto.Titulo}</Card.Title>
    <Card.Text>
    $ {Producto.Precio}
    </Card.Text>
    <Card.Text>
        {Producto.Descripcion}
    </Card.Text>
    {Cambiar ? <ItemCount stock={10} agregar={agregar} Producto={Producto} /> : <Link to={'/cart'}>Ir al carrito</Link>}
  </Card.Body>
</Card>   
        </>
    )
    
}