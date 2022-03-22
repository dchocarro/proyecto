import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ProductoCarros from '../productos/ProductoCarros';

function Carrito(props) {
    
    const [productoscarro,setProductoscarro] = useState([]);

    useEffect(() => {
        //console.log('Se monta Productos');
        axios.get('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
            .then(response => {
                //console.log(response.data)
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        fecha: new Date(response.data[key].fecha)
                    });
                }
                //console.log(arrayProductos);
                setProductoscarro(arrayProductos);
            }).catch(error => {
                console.log('Se ha producido un error');
            });
    }, [])

    return (
        <>
            <div>
                <h2>Productos en carrito:</h2>

                {productoscarro.map((elemento) => (
                <ProductoCarros
                    key={elemento.id}
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    fecha={elemento.fecha}
                    idToken={props.idToken}
                    setLista={props.cambiarLista}
                    lista={props.lista}
                />
            ))}
            </div>
            <Button variant="success">Realizar Pedido</Button>
        </>
    )
}

export default Carrito;