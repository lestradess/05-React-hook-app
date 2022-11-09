import { useEffect,useState } from "react"

export const Message = () => {

    const [ coords, setCoords ] = useState({ x: 0, Y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y }
            console.log(coords);
            setCoords(coords);
        }


        //Notas se crea un listerer que se va a estar ejecutando desde la ejecucion del 
        /////// del useEffect hasta que se mate el proceso
        // window.addEventListener('mousemove', (event) => {
        //     console.log(event);
        // })
        //Notas listener creado para poder limpiar el proceso
        window.addEventListener('mousemove', onMouseMove);

        console.log('Mensaje montado')
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            console.log('Mensaje desmontado');
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify(coords) }
        </>
    )
}
