import React from "react";
import './header.css';
import {TodoContext} from "../TodoContext/TodoContext";

function TodoCounter() {
   const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return(
        <h1 className='head'>
            Has completado {completedTodos} de {totalTodos} las Actividades
        </h1>
    );
}
export { TodoCounter };