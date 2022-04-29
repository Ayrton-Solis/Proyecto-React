import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from 'firebase/firestore';



export default function ItemListContainer() {

  const [item, setItem] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();

    const referencia = collection(db, 'Productos');

    getDocs(referencia).then((res) => {
      
      let item = [...res.docs];

      item = item.map((item) => ({ id: item.id, ...item.data() }));

      setItem(item);

    })
  });

  return (
    <>
    <ItemList productos={item}/>
    </>
  );
}


