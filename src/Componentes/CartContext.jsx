import React, {createContext, useState} from "react";
import productos from "../productos";


export const CartContext = createContext();


const CartContextProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);

    const AddToCart = (item) => {
        console.log(item);
        const indexProducto = Cart.findIndex((CartItem) => CartItem.id === item.id);
        if(indexProducto !== -1) {
            const newCart = [...Cart];
            newCart[indexProducto].count = newCart[indexProducto].count + item.count;
            setCart(newCart);
        } else{
            setCart([ ...Cart, item]);
        }
    };

    const RemoveCart = (id) => {

        setCart(Cart.filter((productos) => productos.id !== id));

    };

    const BuyAll = () => {
        alert('Compraste todo uwu');
    };

    return (

        <CartContext.Provider value={{Cart, AddToCart, RemoveCart, BuyAll}}>
            {children}
        </CartContext.Provider>

    );

}

export default CartContextProvider;