import './Producto.css';
import FechaProducto from './FechaProducto';
// import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

function ProductoCarros(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    // const id = props.id;
    // const setLista = props.setLista;
    let cantidad = props.cantidad;
    // const Lista = props.lista;


    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre} </h2><h2>Cantidad: {cantidad}</h2>
                <div className='producto__precio'>Precio: {precio*cantidad}</div>
            </div>
        </div>
    )
}

export default ProductoCarros;