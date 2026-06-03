import { useState } from "react";

export default function ProductForm({ addProduct, setShowForm }) {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {

        event.preventDefault()

        if (name.length === 0 || price.length === 0 || category.length === 0) {

            setMessage("Todos los campos son requeridos")

            return
        }

        const newProduct = {
            name,
            price,
            category
        }

        console.log(newProduct)

        // LLAMAREMOS A UNA API Y LA API (BACK) PERSITIRA EN LA BASE DE DATOS EL NUEVO PRODUCTO
        addProduct(newProduct)
        setName("")
        setPrice("")
        setCategory("")

        setShowForm(false)


    }

    return (<form className="card p-3 mb-4" onSubmit={handleSubmit}>
        <h5 className="mb-3">Add new product</h5>

        <div className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
        </div>
        <div className="mb-2">
            <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => { setPrice(e.target.value) }}

            />
        </div>
        <div className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Category"
                value={category}
                onChange={(e) => { setCategory(e.target.value) }}

            />
        </div>
        <button type="submit" className="btn btn-success">
            Add product
        </button>
        {message && <div className="alert alert-info mt-2">{message}</div>}
    </form>)
}