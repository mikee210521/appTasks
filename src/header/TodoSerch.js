import React from "react";
import './header.css';
import {TodoContext} from "../TodoContext/TodoContext";
function TodoSerch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return(
        <div className='search'>
            <h2>Busca tu actividad</h2>
            <input
                className='activities'
                value={searchValue}
                onChange={(event)=>{
                    setSearchValue(event.target.value);
                }}
                placeholder="Tu Actividad"
                type="text"/>
            <div className='img'> </div>
        </div>
    );
}
export { TodoSerch };