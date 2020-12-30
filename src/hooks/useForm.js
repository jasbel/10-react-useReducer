import { useState } from "react"

/**
 * @function useForm 
 * @param {Object} initialState 
 * @return {Array} Retorna el valor y la funcion-inputChange
 */
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}
