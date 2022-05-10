import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";


export default function Formulario() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { Cart } = useContext(CartContext);

  function terminarCompra() {

    const db = getFirestore();

    const ventasRef = collection(db, 'Ventas')

    let buyer = {
      buyer: { name, phone, email },
      items: Cart,
    };

    addDoc(ventasRef, buyer).then(({ id }) => {
      console.log(id);
    })
  };

  useEffect(() => {
    console.log(name, email, phone);
  }, [name, email, phone]);

  return (
    <>
      <div><input type="text" value={name} onChange={(e) => { setName(e.currentTarget.value) }} /></div>
      <div><input type="text" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} /></div>
      <div><input type="text" value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} /></div>
      <button onClick={() => {terminarCompra()}}>COMPRAR</button>
    </>
  );
}