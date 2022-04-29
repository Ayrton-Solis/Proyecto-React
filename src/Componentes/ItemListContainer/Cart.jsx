import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import { useContext } from 'react';
import { CartContext } from "../CartContext";



export default function Cart() {

  const { Cart, RemoveCart, BuyAll } = useContext(CartContext);

  return (
    <>
    {Cart.map(Cart => (
      <Card key={Cart.id} border="secondary" style={{ width: '18rem' }}>
        <Card.Header>{Cart.Titulo}</Card.Header>
        <Card.Body>
          <Card.Title>{Cart.Descripcion}</Card.Title>
          <Card.Text>Estas comprando {Cart.count} productos</Card.Text>
          <Button onClick={() => RemoveCart(Cart.id)} variant="danger">Borrar</Button>
        </Card.Body>
      </Card>
    ))}
    <Button onClick={() => BuyAll()} variant="success">Success</Button>{' '}
    </>
)}
