import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";





export default function ItemDetailContainer(){

    const [Producto, setProducto] = useState([]);
    const [Cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then(response => response.json())
            .then((result) => {
                setTimeout(() => {
                    setProducto(result);
                }, 2000);
            })
            .catch(error => {
                console.log('error', error);
            })
            .finally(() => {
                setCargando(false)
            })
        
});



    return (
        <>
            {Cargando ? (<h2>Cargando, profavor espere</h2>) : (<ItemDetail Producto={Producto}/>)}
        </>
    )
    
}