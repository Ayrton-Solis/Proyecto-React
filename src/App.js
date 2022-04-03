import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";


export default function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={"Hola mundo!"}/>
    </>
  );
}


