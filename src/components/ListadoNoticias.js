import React from 'react';
import Noticia from './Noticias';

const ListadoNoticias = ({noticias}) => (
    <div className="row">
            {noticias.map(noticia =>(
                <Noticia />
            ))}
    </div>
);
 
export default ListadoNoticias;