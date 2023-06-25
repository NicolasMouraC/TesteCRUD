import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Defect from "./Defect";
import { useState, useEffect} from "react";
import { getDefectsAPI } from '../services/defectsApi.js';
import SpinnerComponent from './SpinnerComponent.js';

const Card = ({info}) => {
    const navigate = useNavigate();
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ defects, setDefects ] = useState([]);

    useEffect(() => {
        async function getDefects() {
            const result = await getDefectsAPI(info.id);
            setDefects(result)
            setIsLoaded(true);
        }

        getDefects();
    }, []);

    const handleDropdownToggle = () => {
        setAccordionOpen(!accordionOpen);
    };

    const handleAccordionToggle = (eventKey) => {
        eventKey ? setAccordionOpen(true) : setAccordionOpen(false);
    };

    return (
        <div className="container my-3 border border-1 rounded w-100 bg-primary-subtle p-3">
            <div className="d-flex justify-content-between">
                    <Image src={`http://localhost:8000/storage/${info.Imagem_url}`} style={{ width: 100, height: 100 }} rounded/>
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
            <div className="d-flex justify-content-between mt-3 align-items-center">
                <Dropdown show={accordionOpen} onToggle={handleDropdownToggle} className="w-100">
                    <Dropdown.Toggle variant="primary" id="dropdown-accordion">
                        Defeitos
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {   
                            isLoaded ? 
                                defects.map((defect) => (
                                    <Dropdown.Item key={defect.id}>
                                        <Accordion activeKey={accordionOpen ? defect.id : null} onSelect={handleAccordionToggle}>
                                            <Defect idKey={defect.id} title={defect.Titulo} gravity={defect.Gravidade} description={defect.Descricao}/>
                                        </Accordion>
                                    </Dropdown.Item>
                                ))
                            :
                            <SpinnerComponent />
                        }    
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" type="submit" onClick={() => navigate(`/newdefect/${info.id}`, { state: { id: info.id } })}>
                    Adicionar defeito
                </Button>
            </div>
        </div>
    )
}

export default Card;