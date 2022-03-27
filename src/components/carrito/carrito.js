// import { useEffect, useState } from 'react';
import { useState } from 'react';
// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ProductoCarros from '../productos/ProductoCarros';
import ProductoCarrosResumen from '../productos/ProductoCarrosResumen';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Carrito(props) {

    // const [productoscarro, setProductoscarro] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const navega = useNavigate();

    const abrirHandler = () => {
        if (props.lista.length > 0) {
            setMostrar(true);
        }
    }

    const cerrarHandler = () => {
        setMostrar(false);
    }

    const aceptarPedido = () => {
        navega('/realizarpedido')
        setMostrar(false);
    }
    let cantidadtotal = 0;
    // useEffect(() => {
    //     //console.log('Se monta Productos');
    //     axios.get('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
    //         .then(response => {
    //             //console.log(response.data)
    //             let arrayProductos = [];
    //             for (let key in response.data) {
    //                 arrayProductos.push({
    //                     id: key,
    //                     nombre: response.data[key].nombre,
    //                     precio: response.data[key].precio,
    //                     fecha: new Date(response.data[key].fecha)
    //                 });
    //             }
    //             console.log(arrayProductos);
    //             setProductoscarro(arrayProductos);
    //         }).catch(error => {
    //             console.log('Se ha producido un error');
    //         });
    // }, [])
    props.lista.map((elemento) => cantidadtotal = cantidadtotal + elemento.cantidad * elemento.precio);

    return (
        <>
            <div>
                <h2>Productos en carrito:</h2>

                {props.lista.map((elemento) => (

                    <ProductoCarros
                        key={elemento.id}
                        id={elemento.id}
                        nombre={elemento.nombre}
                        precio={elemento.precio}
                        fecha={elemento.fecha}
                        idToken={props.idToken}
                        setLista={props.cambiarLista}
                        lista={props.lista}
                        cantidad={elemento.cantidad}
                    />
                ))}
            </div>
            <div className='producto__precio'>Cantidad Total: {cantidadtotal}</div>
            <Button variant="success" onClick={abrirHandler}>Realizar Pedido</Button>
            <Modal show={mostrar}>
                <Modal.Header closeButton onClick={cerrarHandler}>
                    <Modal.Title>Resumen pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.lista.map((elemento) => (

                        <ProductoCarrosResumen
                            key={elemento.id}
                            id={elemento.id}
                            nombre={elemento.nombre}
                            precio={elemento.precio}
                            fecha={elemento.fecha}
                            idToken={props.idToken}
                            setLista={props.cambiarLista}
                            lista={props.lista}
                            cantidad={elemento.cantidad}
                        />
                    ))}
                    <div className='producto__precio'>Cantidad Total: {cantidadtotal}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={cerrarHandler}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={aceptarPedido}>
                        Aceptar pedido
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Carrito;