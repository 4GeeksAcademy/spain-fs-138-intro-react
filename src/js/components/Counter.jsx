import { useEffect, useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(0)



    function handleIncrementCounter(message) {
        console.log(message)
        setCounter(prev => ++prev)
    }

    // useEffect(() => {

    //     setInterval(() => {
    //         setCounter((prevCounter) => ++prevCounter)
    //     }, 1000)


    //     return (()=>{clearInterval()})

    // }, [])


    return (
        <div>
            <p>Has hecho click {counter} veces</p>
            <button className='btn btn-primary' onClick={() => handleIncrementCounter("SE incrementa")} >Incrementar</button>

        </div>

    )

}