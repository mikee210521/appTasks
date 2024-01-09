import React from "react";
import {Todo_App} from "./Todo_App";
import {TodoProvider} from './TodoContext/TodoContext';



function App() {
    return (
        <TodoProvider>
            <Todo_App/>
        </TodoProvider>
    );
}
export default App;
