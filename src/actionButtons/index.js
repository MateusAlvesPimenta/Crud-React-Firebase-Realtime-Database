import React, { useContext, useState } from "react";
import { productsContext } from "../context/productsContext";

import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function AddButton() {
    const { add } = useContext(productsContext)

    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        color: "",
        size: "",
        price: 0
    });

    function addProduct() {
        if (!product.name || !product.color || !product.price) {
            console.log("Você esqueceu de preencher algum campo, favor preencher todos!");
        }
        else {
            add(product)
            setProduct({
                name: "",
                color: "",
                size: "",
                price: 0
            })
            openCloseModal();
        }
    }

    function openCloseModal() {
        setModal(!modal)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product, [name]: value
        });
    }

    return (
        <>
            <button onClick={openCloseModal}
                className="btn add-button">Novo produto</button>

            <Modal isOpen={modal}>
                <ModalHeader>Novo produto</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label className="form-label">Nome do produto</label>
                        <input type="text" name="name" className="form-control mb-3"
                            onChange={handleChange} />

                        <label className="form-label" >Cor</label>
                        <input type="text" name="color" className="form-control mb-3" rows="2"
                            onChange={handleChange} />
                        
                        <label className="form-label" >Tamanho</label>
                        <input type="text" name="size" className="form-control mb-3" rows="2"
                            onChange={handleChange} />

                        <label className="form-label" >Preço</label>
                        <input type="number" id="active" name="price" className="form-control"
                            onChange={handleChange} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={addProduct} className="btn btn-primary">Adicionar</button>
                    <button onClick={openCloseModal}
                        className="btn btn-secondary">Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export function UpdateButton(item) {
    const { update } = useContext(productsContext);

    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({
        name: item.item.name,
        color: item.item.color,
        size: item.item.size,
        price: item.item.price
    });

    function updateProduct() {
        if (!product.name || !product.color || !product.size || !product.price) {
            console.log("Você esqueceu de preencher algum campo, favor preencher todos!");
        }
        else {
            update(product, item.item.id)
            openCloseModal();
        }
    }

    function openCloseModal() {
        setModal(!modal)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product, [name]: value
        });
    }

    return (
        <>
            <button onClick={openCloseModal} className="btn edit-delete-button">Editar</button>

            <Modal isOpen={modal}>
                <ModalHeader>Editar produto</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label className="form-label">Nome do produto</label>
                        <input type="text" name="name" className="form-control mb-3"
                            onChange={handleChange}
                            value={product.name}/>

                        <label className="form-label" >Cor</label>
                        <input type="text" name="color" className="form-control mb-3" rows="2"
                            onChange={handleChange}
                            value={product.color} />
                        
                        <label className="form-label" >Tamanho</label>
                        <input type="text" name="size" className="form-control mb-3" rows="2"
                            onChange={handleChange}
                            value={product.size}/>

                        <label className="form-label" >Preço</label>
                        <input type="number" id="active" name="price" className="form-control"
                            onChange={handleChange}
                            value={product.price}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={updateProduct} className="btn btn-primary">Editar</button>
                    <button onClick={openCloseModal}
                        className="btn btn-secondary">Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export function DeleteButton(id) {
    const { removeProduct } = useContext(productsContext);
    return (
        <button onClick={() => removeProduct(id)} className="btn edit-delete-button">Excluir</button>
    )
}