import './forms.css';
import React from "react";
import {TodoContext} from "../TodoContext/TodoContext";


function TodoFrom() {

    const {setOpenModal, addTodo} = React.useContext(TodoContext);

    const [newValue,setNewValue] = React.useState('');
    const onSubmit = (event) => {
            event.preventDefault();
            addTodo(newValue);
            setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
      setNewValue(event.target.value);
    };


    return (
        <form
            className='adding'
            onSubmit={onSubmit}
        >
            <label className='descript'>Escribe tu nueva actividad</label>
            <textarea
                className='txtCont'
                placeholder='Escribiendo...'
                value={newValue}
                onChange={onChange}

            />
            <div className='btnCont'>
                <button
                        type='button'
                        className='btn btn--Cancel'
                        onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                        type='submit'
                        className='btn btn--Add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoFrom};