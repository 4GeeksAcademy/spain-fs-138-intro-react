export default function ProductList({ products }) {

    return (
        <div className="mb-4">
            <h5 className="mb-3">Productos en tienda</h5>
            <div className="row">
                {products?.length === 0 ? (
                    <div className="col-12 text-muted">No hay productos aún.</div>
                ) : (
                    products.map((product, index) => (
                        <div className="col-md-4 mb-2" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-title">{product.name}</h6>
                                    <p className="card-text mb-1">Precio: ${product.price}</p>
                                    <span className="badge bg-primary">{product.category}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}