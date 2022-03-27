import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './components/productos/Productos';
import NuevoProducto from './components/nuevoProducto/NuevoProducto';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './components/contenido/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contenido/Contact';
import About from './components/contenido/About';
import ErrorPage from './components/contenido/ErrorPage';
import DetalleProducto from './components/productos/DetalleProducto';
import EditarProducto from './components/editarProducto/EditarProducto';
import Login from './components/login/Login';
import Registro from './components/login/Registro';
import Carrito from './components/carrito/carrito';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);
  const [lista, setLista] = useState([]);
  const [loginData, setLoginData] = useState({});
  const cambiarLista = (lista) => {
    setLista(lista);
  };

  const actualizaLogin = (valor, datos) => {
    setLogin(valor);
    setLoginData(datos);
  }
  console.log(login);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos" element={<Productos idToken={loginData.idToken} cambiarLista={cambiarLista} lista={lista}/>} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/productos/editar/:id" element={<EditarProducto idToken={loginData.idToken} />} />
        <Route path="/nuevo-producto" element={<NuevoProducto idToken={loginData.idToken} />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login actualizaLogin={actualizaLogin} />} />
        <Route path="/registro" element={<Registro actualizaLogin={actualizaLogin} />} />
        <Route path="/carrito" element={<Carrito idToken={loginData.idToken} lista={lista}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
