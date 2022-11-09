import { useState } from "react"

export const CounterApp = () => {
    //Notas Cuando tenemos un objeto en un useState
    const [ state, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    //Notas y necesitamos cambiar solo alguna de sus propiedades, lo desestructuramos
    const { counter1, counter2, counter3 } = state;
    return (
        <>
            <h1>Counter App</h1>
            <hr />
            <h1>Counter1:{ counter1 }</h1>
            <h1>Counter2:{ counter2 }</h1>
            <h1>Counter3:{ counter3 }</h1>
            <hr />
            {/* una vez destructurado podemos manejar los demas objetos con 3 puntos */}
            <button className="btn-outline-primary" onClick={ () => setCounter({
                ...state,
                counter1: counter1 + 1,
            })
            }>+1</button>
        </>

    )
}
