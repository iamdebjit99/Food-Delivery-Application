import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        itemList : [], 
        total : 0
    });

    return (
        <CartContext.Provider value={{cart, setCart}} >
            { children }
        </CartContext.Provider>
    );
};

export {CartContext, CartProvider};