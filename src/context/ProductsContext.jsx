import { createContext, useState } from "react";
import productsData from "../dummy_data/products";


export const ProductContext = createContext(productsData);

export const ProductContextProvidor = ({children, initial = productsData}) => {
    const [products, setProducts] = useState(initial);
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}