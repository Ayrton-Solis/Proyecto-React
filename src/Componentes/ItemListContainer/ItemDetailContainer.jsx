import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos";
import promesa from "../../promesas";
import ItemDetail from "./ItemDetail";





export default function ItemDetailContainer() {

    const [Productos, setProductos] = useState({});
    const { id } = useParams;

    useEffect(() => {
        promesa(3000, productos)
            .then((resultado) => setProductos(resultado.filter((Productos) => Productos.id === Number(id))))
            .catch(error => console.log(error))
            console.log(Productos);
    },[id]);



    return (
        <>
            {Productos && <ItemDetail id={Productos.id} nombre={Productos.nombre} precio={Productos.precio} descripcion={Productos.descripcion} img={Productos.img} />}

            {!Productos && <h1>El producto no existe</h1>}
        </>
    )

}