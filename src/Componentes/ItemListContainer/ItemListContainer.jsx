import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos";
import mostrarProductos from "../../promesas";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "./ItemList";



export default function ItemListContainer() {

  const [Item, setItem] = useState ([]);

  const {categoryId} = useParams();
  
  console.log("por fuera" + productos, categoryId);
  useEffect(() => {
    mostrarProductos(categoryId)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error))
  }, [categoryId])
  return (
    <>
    <ItemList productos={Item}/>
    </>
  );
}


