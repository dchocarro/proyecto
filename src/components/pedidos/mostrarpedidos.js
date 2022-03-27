// import './Producto.css';
// import FechaProducto from './FechaProducto';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Producto from './pedidospedidos';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function Mostrarpedidos(props) {
    const [mostrar, setMostrar] = useState(false);
    const envio = props.envio;
    const pedidos = props.pedidos;
    const id = props.id;

    const navega = useNavigate();

    const borrarProducto = () => {
        axios.delete('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + id + '.json')
            .then(response => {
                //console.log(response);
                alert('Producto borrado');
                navega('/home');
                navega('/pedidos');
            });
        // axios.delete('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos/' + id + '.json?auth=' + props.idToken)
        // .then(response => {
        //     //console.log(response);
        //     alert('Producto borrado');
        //     navega('/home');
        //     navega('/pedidos');
        // });
    }

    const abrirHandler = () => {
        setMostrar(true);
    }

    const cerrarHandler = () => {
        setMostrar(false);
    }

    return (
        <>
            <div className=''>
                <h2>Nombre: {envio.nombre}</h2><h2>Dirección: {envio.direccion}</h2><h2><Button variant="success" onClick={abrirHandler}>Ver detalles</Button> || <Button variant="danger" onClick={borrarProducto}>BORRAR</Button></h2>
                <Modal show={mostrar}>
                    <Modal.Header closeButton onClick={cerrarHandler}>
                        <Modal.Title>Resumen pedido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {pedidos.map((elemento, index) => (

                            <Producto
                                key={index}
                                id={id}
                                nombre={elemento.nombre}
                                precio={elemento.precio}
                                fecha={elemento.fecha}
                                cantidad={elemento.cantidad}
                            />
                        ))}
                        <div className='producto__precio'>Costo total: {envio.costo}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={cerrarHandler}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <br></br>
        </>
    )
}

export default Mostrarpedidos;