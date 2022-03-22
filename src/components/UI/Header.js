import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <h2>LIST OR PORDUCTS</h2>
            <nav>
                {/* <a href="/">Inicio</a> | {'   '}
                <a href="/sobre-nosotros">Quienes somos</a> | {'   '}
                <a href="/productos">Nuestros productos</a> | {'   '}
                <a href="/contacto">Contacto</a> */}
                <Link to="/">Inicio</Link> | {'   '}
                <Link to="/sobre-nosotros">Quienes somos</Link> | {'   '}
                <Link to="/productos">Nuestros productos</Link> | {'   '}
                <Link to="/nuevo-producto">Nuevo producto</Link> | {'   '}
                <Link to="/contacto?p1=23&p2=hola">Contacto</Link> | {'   '}
                <Link to="/login">Login</Link> | {'   '}
                <Link to="/registro">Resgitro</Link> | {'   '}
                <Link to="/carrito">carrito</Link>

            </nav>
        </div>
    )
}

export default Header;