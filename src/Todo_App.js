import React from "react";
import './TodosStyle.css';
import {TodoCounter} from "./header/TodoCounter";
import {TodoSerch} from "./header/TodoSerch";
import {Todolist} from "./secction/Todolist";
import {TodoItem} from "./secction/TodoItem";
import {ButtonCreate} from "./footer/ButtonCreate";
import {TodoLoading} from "./secction/TodoLoading";
import {TodoError} from "./secction/TodoError";
import {TodoEmpty} from "./secction/TodoEmpty";
import {TodoContext} from './TodoContext/TodoContext';
import {Modal} from "./Modal/Modal";
import {TodoFrom} from "./TodoFrom/TodoFrom";




function Todo_App(){
    const {
        loading,
        error,
        searchedTodos,
        todoComplete,
        todoDelete,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter/>
                <div className='squat'>
                <TodoSerch/>
                    <Todolist>
                        {loading && <TodoLoading/>}
                        {error && <TodoError/>}
                        {(!loading && searchedTodos.length === 0) && <TodoEmpty/>}

                        {searchedTodos.map(todo => (<TodoItem
                                key={todo.text}
                                msj={todo.text}
                                completed={todo.completed}
                                onComplete={
                                    () => todoComplete(todo.text)}
                                onDelete={
                                    () => todoDelete(todo.text)}
                            />
                        ))}
                    </Todolist>
                </div>
            <ButtonCreate
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                   <div>
                       <TodoFrom/>
                   </div>
                </Modal>
            )}

        </>
    );
}
export {Todo_App}
