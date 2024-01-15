import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Alojamientos from './Components/Alojamientos/Alojamientos';
import Vuelos from './Components/Vuelos/Vuelos';
import Paquetes from './Components/Paquetes/Paquetes';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/alojamientos" element={<Alojamientos />} />
        <Route path="/vuelos" element={<Vuelos />} />
        <Route path="/paquetes" element={<Paquetes />} />
      </Routes>
      {pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
