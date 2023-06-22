const Card = () => {
    return (
        <div className="container my-3 border border-1 rounded w-100">
            <div className="d-flex justify-content-between">
                <div className="d-grid align-items-center">
                    <span>Marca: marca</span>
                    <span>Modelo: modelo</span>
                </div>

                <div className="d-grid align-items-center">
                    <span>Marca: marca</span>
                    <span>Modelo: modelo</span>
                </div>

                <div className="d-grid align-items-center">
                    <span>Marca: marca</span>                    
                    <span>Modelo: modelo</span>
                </div>
                <button className="btn btn-info text-end m-3">
                    Editar
                </button>
            </div>
        </div>
    )
}

export default Card;