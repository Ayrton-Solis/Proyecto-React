import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";


export default function Formulario() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orden, setOrden] = useState();
  

  const { Cart, Total } = useContext(CartContext);

  function terminarCompra() {

    const db = getFirestore();

    const ventasRef = collection(db, 'Ventas')

    let buyer = {
      buyer: { name, phone, email },
      items: Cart,
      fecha: serverTimestamp(),
      
    };

    addDoc(ventasRef, buyer).then(({ id }) => { 
      setOrden(id)
      console.log(id);
      console.log(buyer);
    })
  };

  useEffect(() => {
    console.log(name, email, phone);
  }, [name, email, phone]);

  return (
    <>
      <div><input type="text" placeholder="Nombre" value={name} onChange={(e) => { setName(e.currentTarget.value) }} /></div>
      <div><input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} /></div>
      <div><input type="text" placeholder="Telefono" value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} /></div>
      <button onClick={() => {terminarCompra()}}>COMPRAR</button>
      {orden ? <div>FELICIDADES!!!! tu orden de compra es: {orden}</div> : <div>Compra ya y seras 5% mas feliz</div>}
    </>
  );
}