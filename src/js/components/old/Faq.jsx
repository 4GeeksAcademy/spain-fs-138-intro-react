export default function Faq() {
    const preguntas = [
        {
            pregunta: '¿Qué es React?',
            respuesta:
                'React es una biblioteca de JavaScript para construir interfaces de usuario.'
        },
        {
            pregunta: '¿Qué es el Virtual DOM?',
            respuesta:
                'El Virtual DOM es una representación ligera del DOM real que React usa para optimizar actualizaciones.'
        },
        {
            pregunta: '¿Cómo se pasan props a los componentes?',
            respuesta: 'Las props se pasan como atributos al invocar el componente.'
        }
    ]
    return (
        <section id='faq' className='container my-5'>
            <h2 className='mb-4'>Preguntas Frecuentes</h2>
            <div className='accordion' id='faqAccordion'>
                {preguntas.map((item, idx) => (
                    <div className='accordion-item' key={idx}>
                        <h2 className='accordion-header' id={`heading${idx}`}>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={`#collapse${idx}`}
                                aria-expanded='false'
                                aria-controls={`collapse${idx}`}
                            >
                                {item.pregunta}
                            </button>
                        </h2>
                        <div
                            id={`collapse${idx}`}
                            className='accordion-collapse collapse'
                            aria-labelledby={`heading${idx}`}
                            data-bs-parent='#faqAccordion'
                        >
                            <div className='accordion-body'>{item.respuesta}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}