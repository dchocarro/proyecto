import './EditarProducto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditarProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const navega = useNavigate();

    const parametros = useParams();

    const [id, setId] = useState(parametros.id);

    useEffect(() => {
        axios.get('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const arrayProducto = [];
                for (let key in response.data) {
                    arrayProducto.push({
                        ...response.data[key],
                        id: key
                    });
                }
                //console.log(arrayProducto);
                setNombre(arrayProducto[0].nombre);
                setPrecio(arrayProducto[0].precio);
                setFecha(arrayProducto[0].fecha);
                setDescripcion(arrayProducto[0].descripcion);
            });
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        const datos = {
            nombre: nombre,
            precio: precio,
            fecha: fecha,
            descripcion: descripcion
        };
        axios.put('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos/' + id + '.json?auth=' + props.idToken, datos)
            .then(response => {
                alert('Producto grabado');
                navega('/productos');
            });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__control'>
                        <label>Nombre</label>
                        <input type='text' onChange={(event) => setNombre(event.target.value)} value={nombre} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Precio</label>
                        <input type='number' min='0.01' step='0.01' onChange={(event) => setPrecio(event.target.value)} value={precio} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Fecha</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => setFecha(event.target.value)} value={fecha} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Descripción</label>
                        <input onChange={(event) => setDescripcion(event.target.value)} value={descripcion} />
                    </div>
                </div>
                <div className='nuevoproducto__actions'>
                    <button type='submit'>Grabar producto</button>
                </div>
            </form>
        </>
    )
}

export default EditarProducto;