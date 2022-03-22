import './NuevoProducto.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const NuevoProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const navega = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const datos = {
            nombre: nombre,
            precio: precio,
            fecha: fecha,
            descripcion: descripcion
        };
        axios.post('https://proyecto-webapp-choki-default-rtdb.europe-west1.firebasedatabase.app/productos.json?auth=' + props.idToken, datos)
            .then(response => {
                alert('Producto grabado');
                navega('/productos');
            }).catch(err => {
                alert('No se ha grabado');
            });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__control'>
                        <label>Nombre</label>
                        <input type='text' onChange={(event) => setNombre(event.target.value)} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Precio</label>
                        <input type='number' min='0.01' step='0.01' onChange={(event) => setPrecio(event.target.value)} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Fecha</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => setFecha(event.target.value)} />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Descripción</label>
                        <input onChange={(event) => setDescripcion(event.target.value)} />
                    </div>
                </div>
                <div className='nuevoproducto__actions'>
                    <button type='submit'>Añadir producto</button>
                </div>
            </form>
        </>
    )
}

export default NuevoProducto;