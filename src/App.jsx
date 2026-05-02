import React from 'react';
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Mapa from './pages/mapa/Mapa';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
import Suporte from './pages/suporte/Suporte';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutNavbar from './components/navbar/LayoutNavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<LayoutNavbar />}>
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/suporte" element={<Suporte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App