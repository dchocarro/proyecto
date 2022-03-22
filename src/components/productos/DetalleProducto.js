import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function DetalleProducto() {

    const [producto,setProducto] = useState({});

    const parametros = useParams();

    useEffect(() => {
        axios.get('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then(response => {
                // const arrayProducto = [];
                // for (let key in response.data) {
                //     arrayProducto.push({
                //         ...response.data[key],
                //         id: key
                //     });
                // }
                //console.log(arrayProducto);
                setProducto(response.data[parametros.id]);
            });
    }, []);

    return (
        <>
            <h2>ESTA ES LA FICHA DEL PRODUCTO CON ID={parametros.id}</h2>
            <p>Este es nuestro producto ID = {parametros.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <p>Fecha: {producto.fecha}</p>
            <p>Descrición: {producto.descripcion}</p>
            <Button variant="success"><Link to={`/productos/editar/${parametros.id}`}>EDITAR PRODUCTO</Link></Button>
        </>
    )
}

export default DetalleProducto;