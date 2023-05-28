import React, { useContext } from "react";
import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { UpdateButton, DeleteButton } from "../actionButtons";
import { productsContext } from "../context/productsContext";

function ProductsList() {
    const { product } = useContext(productsContext);
    if (product.length === 0) {
        return (<h1>Não há produtos</h1>)
    } else {
        const productsKeys = Object.keys(product[0])
        console.log(productsKeys);
        productsKeys.splice(0, 1)
        return (
            <table className="container mt-5 table table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cor</th>
                        <th>Tamanho</th>
                        <th>Preço</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.size}</td>
                            <td>{Number(item.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>
                            <UpdateButton item={item} /> |
                            <DeleteButton id={item.id} />
                        </tr>
                    ))}
                </tbody>
            </table>

        )
    }
}

export default ProductsList;