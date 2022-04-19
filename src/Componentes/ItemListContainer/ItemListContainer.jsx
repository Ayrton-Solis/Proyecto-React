import React, { useEffect, useState } from "react";
import productos from "../../productos";
import promesa from "../../promesas";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "./ItemList";



export default function ItemListContainer() {
  const [Item, setItem] = useState ([]);

  useEffect(() => {
    promesa(3000, productos)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error))
  })
  return (
    <>
    <ItemList productos={Item}/>
    </>
  );
}


