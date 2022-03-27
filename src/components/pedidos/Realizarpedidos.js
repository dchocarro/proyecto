import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
function Realizarpedidos(props) {

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [mostrar, setMostrar] = useState(false);
    const navega = useNavigate();

    const abrirHandler = () => {
        setMostrar(true);
    }

    const cerrarHandler = () => {
        setMostrar(false);
        navega('/productos');
    }



    const submitHandler = (event) => {
        event.preventDefault();
        const lista = props.lista;
        const datos = {
            nombre: nombre,
            direccion: direccion
        };
        const todo = {
            envio: datos,
            pedidos: lista
        }
        axios.post('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', todo)
            .then(response => {
                // alert('Producto grabado correctamente');
                props.cambiarLista([])
                abrirHandler()                
                
            });
        // axios.put('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?auth=' + props.idToken, todo)
        //     .then(response => {
        //         alert('Producto grabado correctamente');
        //         navega('/productos');
        //     });
    }


    return (
        <>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre y apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Nombre y apellidos" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Direccion de envio COMPLETA</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" value={direccion} onChange={(event) => setDireccion(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Aceptar pedido
                </Button>
            </Form>

            <Modal show={mostrar}>
                <Modal.Header>
                    <Modal.Title>Gracias por el pedido!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="success" onClick={cerrarHandler}>
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Realizarpedidos;