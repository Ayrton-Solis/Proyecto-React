import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemListContainer/ItemDetailContainer";
import ItemList from "./Componentes/ItemListContainer/ItemList";



export default function App() {

  return (
    <> 
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/categoria/:id" element={<ItemList />}/>
        <Route exact path="/Detalle" element={<ItemDetailContainer />}/>

      </Routes>
    
    
    </BrowserRouter>
    </>
  );
}


