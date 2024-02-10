import React, { useContext, createContext, useState } from "react";

const ProductsContext = createContext();

export const useAllProducts = () => {
    return useContext(ProductsContext);
}

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    const setAllProducts = (data) => {
        setProducts(data);
    }

    return (
        <ProductsContext.Provider value={{ products, setAllProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}
