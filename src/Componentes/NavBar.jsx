import React from "react";
import "../Componentes/navbar.css"
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
<>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Link className="link" to="/">Tienda Solís</Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link className="link" to="/categoria/Remeras">Remeras</Link>
        <Link className="link" to="/categoria/Pantalones">Pantalones</Link>
        <Nav.Link className="link" href="mailto:ayrtonsolis018@gmail.com">Contacto</Nav.Link>
      </Nav>
      <Link to="/cart"><CartWidget/></Link>
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