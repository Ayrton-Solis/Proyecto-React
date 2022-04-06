import React from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemCount from "./ItemCount";



export default function ItemListContainer({mensaje}) {

  function onAdd(cuanto) {
    

  }
  
  return (
    <>
    <h1>{mensaje}</h1>
    <ItemCount stock={10}/>
    </>
  );
}


