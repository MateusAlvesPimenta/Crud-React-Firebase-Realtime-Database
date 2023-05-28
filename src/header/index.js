import React from "react";
import "./styles.css"
import { AddButton } from "../actionButtons"

function Header() {

    return (
        <header>
            <h1>Estoque de produtos</h1>
            <AddButton />
        </header>   
    )
}

export default Header;