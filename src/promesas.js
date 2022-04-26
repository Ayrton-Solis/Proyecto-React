import productos from "./productos"


let verdadero = true;



export const mostrarProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        let productoFiltrado = productos.filter((producto) => producto.categoria === categoryId);
        categoryId ? resolve(productoFiltrado) : resolve(productos)
        console.log("funcion" + productos, categoryId);
    })
};

const promesa = (tiempo, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (verdadero) {
                resolve(mostrarProductos(categoryId));

            } else {
                reject('error');
            }
        }, tiempo)
    })
};

export default promesa