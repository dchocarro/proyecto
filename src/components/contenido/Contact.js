import {useSearchParams} from 'react-router-dom';

function Contact() {

    const [parametros, setParametros] = useSearchParams();

    return (
        <>
            <h2>CONTACTO</h2>
            <p>Esta es nuestra dirección.</p>
            <p>El parámetro p1 es {parametros.get('p1')}.</p>
            <p>El parámetro p2 es {parametros.get('p2')}.</p>
        </>
    )
}

export default Contact;