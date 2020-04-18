import React, {useState} from 'react';

const useSelect = (stateInitial, opciones) => {

    // state del custom hook
// eslint-disable-next-line 
    const [ state, actualizarState] = useState(stateInitial);
    
    const SelectNoticias = () =>(
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
        {opciones.map(opcion => (
            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}

        </select>
    );

    return [state,SelectNoticias ];
}
 
export default useSelect;