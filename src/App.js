import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  // definir categoria y noticias

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias ] = useState([]);


  useEffect(() =>{

    const consultarAPI = async () =>{
      const APIKEY = '7c7fa6171772477783eb844a64e9bd64'

        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${APIKEY}`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        guardarNoticias(noticias.articles);
    }

    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="BUSCADOR DE NOTICIAS"/>

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
