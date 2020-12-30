import React from "react";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ( {handleAddTodo} ) => {

    /** hook useForm
     * @see {@link customHook#useForm}
    */
   const [{ description }, handleInputChange, reset] = useForm({
    description: '',

})

    /** Accion del Formulario
     * @param e.preventDefault: Previene la recarga de la pagina
     * @param dispatch enviara la nueva tarea al conjunto todos
    */
    const handleSubmit = (e) => {
        e.preventDefault();

        /** validacion basica */
        if( description.trim().length <= 1 )  {
            return
        }

        const newTodo = {
            id: new Date().getTime() ,
            desc: description,
            done: false
        }
        handleAddTodo(newTodo)

        reset();
    }

    return (
        <>
            <h4>Agregar Todos</h4>
            <hr />

            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    className="form-control mb-1"
                    value={description}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block">
                    {" "}
                    Agregar{" "}
                </button>
            </form>
        </>
    );
};

export default TodoAdd;
