import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Card = ({info}) => {
    const navigate = useNavigate();

    return (
        <div className="container my-3 border border-1 rounded w-100 bg-primary-subtle p-3">
            <div className="d-flex justify-content-between">
                <div className="d-grid align-items-center gap-3">
                    <div><span className="fw-bold">Modelo: </span>{info.Modelo}</div>
                    <div><span className="fw-bold">Marca: </span>{info.Marca}</div>
                </div>

                <div className="d-grid align-items-center gap-3 mx-3 mx-md-0">
                    <div><span className="fw-bold">Motor: </span>{info.Motor}</div>
                    <div><span className="fw-bold">Tipo de combustível: </span>{info.TipoCombustivel}</div>
                </div>

                <div className="d-grid align-items-center gap-3">
                    <div><span className="fw-bold">Cor: </span>{info.Cor}</div>                    
                    <div><span className="fw-bold">Categoria: </span>{info.Categoria}</div>
                </div>
                <Button variant="primary" type="submit" onClick={() => navigate(`/edit/${info.id}`, { state: { id: info.id } })}>
                    Editar
                </Button>
            </div>
        </div>
    )
}

export default Card;