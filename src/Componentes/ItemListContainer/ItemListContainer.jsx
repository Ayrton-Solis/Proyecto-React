import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "./ItemList";



export default function ItemListContainer() {
  const [Productos, setProductos] = useState ([]);

  useEffect(() => {
    setTimeout(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(resultado => setProductos(resultado))
    .catch(error => console.log(error))
  },3000)})
  return (
    <>
    <ItemList productos={Productos}/>
    </>
  );
}


