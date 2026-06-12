import { useState } from "react"

export default function BasicForm() {

    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault() //evita el comportamiento por defecto de los formularios html --> actions ...refresh
        if (name.length === 0) {
            alert("FORMULARIO VACIO")
        }
        console.log(name)
        //validar
        // LLAMA UNA API ---SETEAR UN estado
        // se setean todos los estados a vacio
        setName("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='text'

                value={name}
                placeholder="Escribe el nombre"
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}