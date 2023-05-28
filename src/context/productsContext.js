import React, { createContext, useState, useEffect } from "react";
import database from "../config/firebase";

export const productsContext = createContext();

export function ProductsContextProvider(props) {
    const [updateData, setUpdateData] = useState(true)
    const [product, setProduct] = useState([])

    function add(product) {
        database.ref("products").push(product)
        setUpdateData(true)
    }
    
    useEffect(() => {
        database.ref("products").once('value')
        .then(snapshot => {
            const data = snapshot.val();
            
            if (!data) {
                setProduct([])
            }
            else {
                const productsArray = Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
                    setProduct(productsArray);
            }
            })
        setUpdateData(false)
    }, [updateData])

    function update(product, id) {

        const elementRef = database.ref("/products/" + id)
        elementRef.update(product)

        setUpdateData(true)
    }
    
    function removeProduct(item) {
        const elementRef = database.ref("/products/" + item.id);
        elementRef.remove();
        setUpdateData(true)
    }

    return (
        <productsContext.Provider
            value={{
                add,
                product,
                update,
                removeProduct
            }}>
            {props.children}
        </productsContext.Provider>
    )
}
