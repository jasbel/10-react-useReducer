import React, { useReducer, useEffect } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    /** usar useReducer [] mejor usar init para que no sobrecarge la app */
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    /** @function handleDelete eliminar la tarea con el btn-borrar */
    const handleDelete = (todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch(action)
    }

    /** @function handleToggle Cambiar la tarea a tachada */
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    /** @function handleAddTodo Agregar nueva tarea a la lista */
    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div>
            <h1>Todo app {todos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>


        </div>
    )
}

export default TodoApp

