import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function carrito(props) {
    console.log(props.lista);
    let lista = props.lista;
    lista.map((elemento)=>{
        return console.log("hola");
    })
    let a = "hola";

    return (
        <>
            <div>
                <h2>Productos en carrito: {}</h2>
            </div>
            <Button variant="success">Realizar Pedido</Button>
        </>
    )
}

export default carrito;