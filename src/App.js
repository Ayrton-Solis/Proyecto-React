import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemListContainer/ItemDetailContainer";
import Cart from "./Componentes/ItemListContainer/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      
      <Routes>

        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/categoria/:id" element={<ItemListContainer />}/>
        <Route exact path="/Item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<Cart />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}


