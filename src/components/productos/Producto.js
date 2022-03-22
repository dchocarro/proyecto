import './Producto.css';
import FechaProducto from './FechaProducto';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    const id = props.id;
    const setLista = props.setLista;
    let cantidad = 0;
    const Lista = props.lista;

    const navega = useNavigate();

    // const borrarProducto = () => {
    //     axios.delete('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos/' + id + '.json?auth=' + props.idToken)
    //         .then(response => {
    //             //console.log(response);
    //             alert('Producto borrado');
    //             navega('/home');
    //             navega('/productos');
    //         });
    // }
    const añadirLista = () => {
        
        let arrayProductos = Lista;

        arrayProductos["id "+id]={precio: precio, cantidad: cantidad+1};
        cantidad++;
        setLista(arrayProductos);
        console.log(Lista)
    }
    

    const borrarLista = () => {
        let arrayProductos = Lista;
        if(cantidad>0){
            

        arrayProductos["id "+id]={precio: precio, cantidad: cantidad-1};
        cantidad--;
        
        }if (cantidad ===0) {
            delete arrayProductos["id "+id];
        }
        setLista(arrayProductos);
        console.log(Lista)
    }

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre} - <Link to={`/productos/${props.id}`}>VER DETALLE</Link> || <Button variant="success" onClick={añadirLista}>+</Button><Button variant="danger" onClick={borrarLista}>-</Button></h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;