import React from "react";
import Header from "./header";
import ProductsList from "./productList";
import { ProductsContextProvider } from "./context/productsContext";
import "./globalStyles.css"
function App() {
  return (
    <>
      <ProductsContextProvider>
        <Header />
        <ProductsList />
      </ProductsContextProvider>
    </>
  )
}

export default App;
