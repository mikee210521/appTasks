import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext(undefined);

function TodoProvider({children}) {
    const {
        item: todos ,
        saveItem: saveTodos ,
        loading,
        error,
    }= useLocalStorage('App_Todos', []);
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(
        todo => !!todo.completed).length;
    const totalTodos= todos.length;

    const searchedTodos = todos.filter(
        (todo)=>{
            const textvalue = todo.text.toLowerCase();
            const textsearch = searchValue.toLowerCase();
            return textvalue.includes(textsearch)}
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed:false,
        });
        saveTodos(newTodos);
    }

    const todoComplete = text=> {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo)=> todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)};

    const todoDelete = (text)=> {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo)=> todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    };
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            todoComplete,
            todoDelete,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
