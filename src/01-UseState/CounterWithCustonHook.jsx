import { useCounter } from "../hooks/useCounter"

export const CounterWithCustonHook = () => {

    const { counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter With CustonHook: { counter }</h1>
            <hr />
            <button className="btn-outline-primary" onClick={ () => increment() }>+1</button>
            <button className="btn-outline-primary" onClick={ reset }>reset</button>
            <button className="btn-outline-primary" onClick={ decrement }>-1</button>
            <button className="btn-outline-primary" onClick={ () => increment(2) }>+2</button>
        </>

    )
}
