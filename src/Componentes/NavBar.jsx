import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
<>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Tienda Solís</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link to="/Detalle">Productos</Nav.Link>
        <Nav.Link href="mailto:ayrtonsolis018@gmail.com">Contacto</Nav.Link>
      </Nav>
      <CartWidget/>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Ingrese el producto"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
  }