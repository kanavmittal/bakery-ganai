import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvidor = ({children, initial = []}) => {
    const [cart, setCart] = useState(initial);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}