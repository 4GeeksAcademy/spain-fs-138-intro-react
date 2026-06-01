import "bootstrap/dist/css/bootstrap.min.css";
import IconCard from "./IconCard";
import DigitCard from "./DigitCard";
import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

// Componente especial para la primera caja con el icono

export default function SecondCounter() {
    const [counter, setCounter] = useState(0)
    const [active, setActive] = useState(true)

    function getDigits(second) {
        console.log({ second })
        const textSeconds = second.toString()
        console.log({ textSeconds })
        const textSecondsFormatted = textSeconds.padStart(6, "0")
        console.log({ textSecondsFormatted })
        return textSecondsFormatted.split("")

    }

    const digits = getDigits(counter)

    console.log({ digits })


    useEffect(() => {
        let interval = null

        if (active === true) {

            interval = setInterval(() => {
                return setCounter((prevCounter) => { return ++prevCounter })

            }, 1000
            )
        }
        else {
            clearInterval(interval)
        }

        return (() => { clearInterval(interval) })



    }, [active])

    function handleResetCount() {
        setCounter(0)
        setActive(false)
    }


    return (<div className="container mt-5 text-center">
        <h2 className="mb-4">
            Contador de Segundos
        </h2>

        {/* Contenedor de mi marcador de segundos */}
        <div className="d-flex justify-content-center mb-4 flex-wrap">
            {/* Icono del reloj */}
            <IconCard />

            {/* Contadores de nuestros digitos */}
            {digits.map((digit, index) => {
                return (

                    <DigitCard key={index}
                        value={digit} />
                )

            })}
        </div>
        {/* Contenedor de los botones de control */}
        <div className="btn-group" role="group">
            <button type="button" className={`btn ${active ? 'btn-warning' : 'btn-success'}`}
                onClick={() => { setActive((prevActive) => { return !prevActive }) }}>

                {active ? (<>
                    <Pause />
                    <p>Pausar</p>
                </>)
                    :
                    (<>
                        <Play />
                        <p>Play</p>
                    </>
                    )}

            </button>

            <button className="btn btn-danger" onClick={handleResetCount}>
                <RotateCcw />
                <p>Reiniciar</p>

            </button>

        </div>





    </div>
    )
}
