import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Card = ({info}) => {
    const navigate = useNavigate();

    return (
        <div className="container my-3 border border-1 rounded w-100">
            <div className="d-flex justify-content-between">
                <div className="d-grid align-items-center">
                    <span>Marca: {info.Marca}</span>
                    <span>Modelo: {info.Modelo}</span>
                </div>

                <div className="d-grid align-items-center">
                    <span>Motor: {info.Motor}</span>
                    <span>Tipo de combustível: {info.TipoCombustivel}</span>
                </div>

                <div className="d-grid align-items-center">
                    <span>Cor: {info.Cor}</span>                    
                    <span>Categoria: {info.Categoria}</span>
                </div>
                <Button variant="primary" type="submit" onClick={() => navigate(`/edit/${info.id}`, { state: { id: info.id } })}>
                    Editar
                </Button>
            </div>
        </div>
    )
}

export default Card;