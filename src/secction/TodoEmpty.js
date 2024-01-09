import React from "react";
import './section.css';
function TodoEmpty() {
return (
    <div className='progress'>
        <h2 className='letter'> Esta actividad no se encuentra pero puedes crearla. </h2>
    </div>
);
}

export {TodoEmpty}