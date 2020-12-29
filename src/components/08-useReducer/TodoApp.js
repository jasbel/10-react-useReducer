import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime() ,
    desc: 'Aprender React',
    done: false
}];

const TodoApp = () => {

    /** usar useReducer */
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    /** Accion del Formulario
     * @param e.preventDefault: Previene la recarga de la pagina
     * @param dispatch enviara la nueva tarea al conjunto todos
     * 
    */
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime() ,
            desc: 'Nueva tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
    }

    return (
        <div>
            <h1>Todo app { todos.length }</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map((todo, i) => (
                            <li key={todo.id} className="list-group-item" >
                                <p className="text-center"> {i + 1}. {todo.desc}</p>
                                <button  className="btn btn-danger">Borrar</button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todos</h4>
                    <hr/>

                    <form action="" onSubmit={ handleSubmit }>
                        <input type="text" name="description" placeholder="Aprender ..." autoComplete="off" className="form-control mb-1"/>

                        <button type="submit" className="btn btn-primary btn-block"> Agregar </button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default TodoApp

