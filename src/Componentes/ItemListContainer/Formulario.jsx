import React, { useEffect, useState } from "react";


export default function Formulario() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
      console.log(name, email, phone);
  }, [name, email, phone]);
  
  return (
    <>
    <div><input type="text" value={name} onChange={(e) => {setName(e.currentTarget.value)}}/></div>
    <div><input type="text" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}}/></div>
    <div><input type="text" value={phone} onChange={(e) => {setPhone(e.currentTarget.value)}}/></div>
    </>
  );
}