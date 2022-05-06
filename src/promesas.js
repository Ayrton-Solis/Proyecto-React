import productos from "./productos"


let verdadero = true;



export const mostrarProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        let productoFiltrado = productos.filter((producto) => producto.categoria == categoryId);
        categoryId ? resolve(productoFiltrado) : resolve(productos)
        console.log("funcion" + productos, categoryId);
    })
};

export default mostrarProductos;