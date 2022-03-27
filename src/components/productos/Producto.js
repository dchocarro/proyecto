import './Producto.css';
// import FechaProducto from './FechaProducto';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    const imagen = props.imagen;
    const id = props.id;
    const setLista = props.setLista;
    const Lista = props.lista;

    // const navega = useNavigate();

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
        const buscar = id;
        // console.log("id " + id);
        if (arrayProductos.length === 0) {
            arrayProductos.push({ id: id, nombre: nombre, precio: precio, fecha: fecha, imagen: imagen, cantidad: 1 });
            // console.log("nuevo")
        } else {
            let existe = false;
            let donde = 0;
            for (let key in arrayProductos) {
                // console.log("id producto: "+arrayProductos[key].id)
                // console.log("id "+id)
                // console.log("v or F: ")
                // console.log(arrayProductos[key].id === buscar)
                if (arrayProductos[key].id === buscar) {
                    existe = true;
                    donde = key;
                }
            }
            if (existe === true) {
                arrayProductos[donde].cantidad = arrayProductos[donde].cantidad + 1;
                // console.log("cambio cantidad")
            } else {
                arrayProductos.push({ id: id, nombre: nombre, precio: precio, fecha: fecha, imagen: imagen, cantidad: 1 });
                // console.log("añadop otro nuevo en el array")
            }
        }


        //arrayProductos.push({ id: id, nombre: nombre, precio: precio, fecha: fecha, cantidad: cantidad });
        // cantidad++;
        setLista(arrayProductos);
        // console.log(props.lista);
    }


    const borrarLista = () => {

        let arrayProductos = Lista;
        const buscar = id;
        if (arrayProductos.length > 0) {

            let existe = false;
            let donde = 0;
            for (let key in arrayProductos) {
                if (arrayProductos[key].id === buscar) {
                    existe = true;
                    donde = key;
                }
            }
            if (existe === true) {
                if (arrayProductos[donde].cantidad > 1) {
                    arrayProductos[donde].cantidad = arrayProductos[donde].cantidad - 1;
                } else {
                    // console.log("eliminar")
                    arrayProductos.splice(donde,1)
                //     console.log(donde);
                //     console.log(arrayProductos[donde])
                }

                // console.log("cambio cantidad")
            } else {
                arrayProductos.push({ id: id, nombre: nombre, precio: precio, fecha: fecha, cantidad: 1 });
                // console.log("añadop otro nuevo en el array")
            }
        }

        // let arrayProductos = Lista;
        // if (cantidad > 0) {


        //     arrayProductos["id " + id] = { precio: precio, cantidad: cantidad - 1 };
        //     cantidad--;

        // } if (cantidad === 0) {
        //     delete arrayProductos["id " + id];
        // }
        setLista(arrayProductos);
    }
    return (
        <div className='producto'>
            {/* <FechaProducto fecha={fecha} /> */}
            <img width="70rem" height="70rem" src={imagen} alt="imagen"></img>
            <div className='producto__descripcion'>
                <h2>{nombre} - <Link to={`/productos/${props.id}`}>VER DETALLE</Link> || <Button variant="success" onClick={añadirLista}>+</Button><Button variant="danger" onClick={borrarLista}>-</Button></h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;