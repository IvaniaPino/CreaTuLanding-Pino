// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda online!" />
    </>
  );
};

export default App;
<div className="pantalla-central">
  <h1>¡Bienvenido a nuestra tienda online!</h1>
</div>
