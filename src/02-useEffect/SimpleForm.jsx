import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'strider',
        email: "loquillo@lestradamus.es",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    //Notas No se debe usar un useEfect sin dependencias
    /////// Porque se ejecuta cada da vez que cambie el formulario
    useEffect(() => {
        console.log('useEffect called!');
        //Notas al poner un arreglo vacio despues de la coma le decimos al useEffect
        /////// que no se cargue mas que la primera vez, y en el van las dependencias
    }, []);
    //Notas useEffect que dependa de los cambios del formulario
    useEffect(() => {
        console.log('formState chaged!');
    }, [ formState ]);
    //Notas useEffect que dependa del correo
    useEffect(() => {
        console.log('email chaged!');
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="algo@algo.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            {
                (username === 'strider2') && <Message/>
            }
        </>
    )
}
