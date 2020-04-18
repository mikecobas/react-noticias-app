import React, { Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {
  return (
    <Fragment>
      <Header titulo="BUSCADOR DE NOTICIAS"/>

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
