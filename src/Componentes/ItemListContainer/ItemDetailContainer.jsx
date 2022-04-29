import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos";
import promesa from "../../promesas";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";







export default function ItemDetailContainer() {

    const [Productos, setProductos] = useState({});
    const { id } = useParams();
    useEffect(() => {

        const db = getFirestore();
        const referencia = doc(db, 'Productos', id);

        getDoc(referencia).then((res) => {

            let detalle = { id: res.id, ...res.data() };

            setProductos(detalle);

        })
    }, [id]);





    return (
        <>
            {Productos && <ItemDetail Producto={Productos} />}

            {!Productos && <h1>El producto no existe</h1>}
        </>
    )

}