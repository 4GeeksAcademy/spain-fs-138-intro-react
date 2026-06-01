import { useEffect } from "react"


export default function CardUser({ name, age, job }) {
    useEffect(() => {
        console.log(`Componente Card de ${name} se ha montado `)

        return (() => {
            console.log(`Componente Card de ${name} se ha desmontado `)


        })
    }, [])

    return (
        <>
            <div className='card m-2' style={{ width: '18rem' }}>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Edad: {age}</h6>
                    <p className='card-text'>Profesión: {job}</p>
                </div>
            </div>
        </>
    )
}