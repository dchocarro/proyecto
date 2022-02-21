import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Productos from './components/productos/Productos';
// import NuevoProducto from './components/nuevoProducto/NuevoProducto';
import Header from './Componentes/UI/Header';
import Footer from './Componentes/UI/Footer';
// import Home from './components/contenido/Home';
import { Routes, Route } from 'react-router-dom';
// import Contact from './components/contenido/Contact';
// import About from './components/contenido/About';
// import ErrorPage from './components/contenido/ErrorPage';
// import DetalleProducto from './components/productos/DetaleProducto';

function App() {

  const productos = [
    {
      id: 1,
      nombre: 'Ratón óptico 1',
      precio: 15.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      id: 2,
      nombre: 'Ratón óptico 2',
      precio: 25.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      id: 3,
      nombre: 'Ratón óptico 3',
      precio: 9.50,
      fecha: new Date(2022, 2, 2)
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="nuevo-producto" element={<NuevoProducto />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
