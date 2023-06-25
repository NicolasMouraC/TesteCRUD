import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/slices/messagesSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { GravityOptions } from "./FormOptions"
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import { createDefectAPI } from "../../services/defectsApi.js";

const NewDefect = () => {
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        title: "",
        gravity: "",
        description: "",
        carId: id
    });

    const handleFormChange = (event, name) => {
        if (event.hasOwnProperty('label')) {
          setFormState((prev) => {
            return { ...prev, [name]: event.value };
          });
        } else {
            setFormState((prev) => {
                return { ...prev, [name]: event.target.value };
            });
        }
    };

    const handleEditButtonClick = (e) => {
        e.preventDefault();

        for (let key in formState) {
            if (formState[key] === "") {
                dispatch(addMessage({ title: "Erro", message: "Preencha todos os campos" }));
                return;
            }
        }

        dispatch(addMessage({ title: "Sucesso", message: "Defeito adicionado" }));
        createDefectAPI(formState);
        navigate('/');
    }

    return (
        <div>
            <div className="container-fluid p-5 border border-1 rounded">
                    <Form className='border border-1 rounded'>
                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control name='title' onChange={(e) => handleFormChange(e, "title")} placeholder="Digite o defeito..."/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Gravidade</Form.Label>
                                <Select name="gravity" options={GravityOptions} onChange={(e) => handleFormChange(e, "gravity")}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-100 mx-3">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Descreva o defeito..." onChange={(e) => handleFormChange(e, "description")}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex justify-content-evenly my-3'>
                            <Button variant="primary" type="submit" onClick={handleEditButtonClick}>
                                Adicionar defeito
                            </Button>
                        </div>
                    </Form>
                </div>
        </div>
    )
}

export default NewDefect;