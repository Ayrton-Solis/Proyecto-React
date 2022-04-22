import React, {createContext, useState} from "react";


export const Context = createContext();


const CartContextProvider = ({ children }) => {

    const [Carrito, setCarrito] = useState([]);

    const AddCart = (item) => {

    };

    const RemoveCart = (item) => {

    };

    const Comprar = () => {

    };

    return (

        <Context.Provider value={{Carrito, AddCart, RemoveCart, Comprar}}>
            {children}
        </Context.Provider>

    );

}

export default CartContextProvider;