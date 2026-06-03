import { useEffect, useState } from "react"
import ProductList from "./ProductList"
import ProductForm from "./ProductForm"

export default function Shop() {
    const [showForm, setShowForm] = useState(false)

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(
        [])

    function addProduct(product) {

        setProducts([...products, product])
    }


    useEffect(() => {


        const timer = setTimeout(() => {

            //LLAMAREMOS A LA API .....

            setProducts([
                { name: "Camiseta", price: 15, category: "Ropa" },
                { name: "Auriculares", price: 30, category: "Electrónica" }
            ])
            setLoading(false)
        }, 2000
        )

        return () => { clearTimeout(timer) }

    }, [])

    return (
        <div className="container py-4">
            {loading === true ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            ) :
                (
                    <>
                        {/* HEADER */}
                        < section className="d-flex gap-2 mb-2">
                            <h2>Mi Tienta</h2>
                            <button className=" btn btn-primary"
                                onClick={() => setShowForm((prevShowForm) => { return !prevShowForm })}
                            >
                                {showForm === true ? 'Ocultar' : "+ Añadir Producto"}
                            </button>
                        </section>

                        {/* LISTAMOS PRODUCTOS O FORMULARIO */}
                        {
                            showForm ? <ProductForm addProduct={addProduct} setShowForm={setShowForm} /> : <ProductList products={products} />
                        }
                    </>)
            }
        </div >
    )
}