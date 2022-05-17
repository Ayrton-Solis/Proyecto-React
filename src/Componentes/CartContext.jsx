import React, {createContext, useState} from "react";


export const CartContext = createContext();


const CartContextProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);
    let [Total, setTotal] = useState(0);

    const SumarTotal = (Cart) => {
        Cart.forEach(Producto => {
            setTotal(Total += Producto.Precio);
            console.log(Total);
        });
    };

    const AddToCart = (item) => {
        console.log(item);
        const indexProducto = Cart.findIndex((CartItem) => CartItem.id === item.id);
        if(indexProducto !== -1) {
            const newCart = [...Cart];
            newCart[indexProducto].count = newCart[indexProducto].count + item.count;
            setCart(newCart);
            SumarTotal(Cart);
        } else{
            setCart([ ...Cart, item]);
            SumarTotal(Cart);
            console.log(Total);
        }
    };

    const RemoveCart = (id) => {

        setCart(Cart.filter((productos) => productos.id !== id));

    };

    const BuyAll = () => {
        alert('Compraste todo uwu');
    };

    return (

        <CartContext.Provider value={{Cart, Total, AddToCart, RemoveCart, BuyAll}}>
            {children}
        </CartContext.Provider>

    );

}

export default CartContextProvider;