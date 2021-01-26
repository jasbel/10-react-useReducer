import { useState } from "react"

/**
 * @function useForm Mi hook perosonalizado
 * @param {*} initialState Estado Inicial en vacio
 * @param values todos los valores
 */
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange ];

}
