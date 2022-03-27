// import './Producto.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

function Pedidospedidos(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const cantidad = props.cantidad;
    return (
        <>
        <div className='producto' >
            <div className='producto__descripcion'>
                <h2>{nombre} </h2><h2>Cantidad: {cantidad}</h2>
                <div className='producto__precio'>Precio total: {precio*cantidad}</div>
            </div>
        </div>
        </>
    )
}

export default Pedidospedidos;