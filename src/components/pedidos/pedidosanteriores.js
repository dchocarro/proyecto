// import { useParams, Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pedidosjs from '../pedidos/mostrarpedidos';
// import Button from 'react-bootstrap/Button';

function Pedidosanteriores() {

    const [todopedidos, setTodoPedidos] = useState([]);

    // const parametros = useParams();

    useEffect(() => {
        axios.get('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
            .then(response => {

                const arrayProducto = [];
                for (let key in response.data) {

                    arrayProducto.push({
                        id: key,
                        envio: response.data[key].envio,
                        pedidos: response.data[key].pedidos,
                    });
                }
                setTodoPedidos(arrayProducto);
            });
    }, []);
    return (
        <>
            {todopedidos.map((elemento) => (
                <Pedidosjs
                    key={elemento.id}
                    id={elemento.id}
                    envio={elemento.envio}
                    pedidos={elemento.pedidos}
                    costo={elemento.costo}
                />
            ))}

            {/* <h2>ESTA ES LA FICHA DEL PRODUCTO CON ID={parametros.id}</h2>
            <p>Este es nuestro producto ID = {parametros.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <p>Fecha: {producto.fecha}</p>
            <p>Descrición: {producto.descripcion}</p> */}
            {/* <Button variant="success"><Link to={`/productos/editar/${parametros.id}`}>EDITAR PRODUCTO</Link></Button> */}
        </>
    )
}

export default Pedidosanteriores;