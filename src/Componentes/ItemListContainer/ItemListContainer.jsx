import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import { useParams } from "react-router-dom";



export default function ItemListContainer() {

  const [item, setItem] = useState([]);
  const { categoryId } = useParams();
  
  useEffect(() => {
    const db = getFirestore();

    const referencia = categoryId ? query(collection(db, 'Producto'), where('categoryId', '==', categoryId)) : collection(db, 'Producto');

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


