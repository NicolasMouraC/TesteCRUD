import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select';
import Defect from '../../../components/Defect.js';
import ErrorMessage from '../../../components/ErrorMessage.js';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { BrandOptions, CategoryOptions, ColorOptions, EngineOptions, FuelTypeOptions, NumberOfSeatsOptions } from '../FormOptions.js';
import { useEffect, useState } from 'react';
import { editCarAPI, deleteCarAPI } from '../../../services/api.js';
import { useDispatch } from 'react-redux';
import { getCarAPI } from '../../../services/api.js';
import { useLocation } from 'react-router-dom';
import { toggleIsCarsLoaded } from '../../../redux/slices/carsSlice.js';
import SpinnerComponent from '../../../components/SpinnerComponent.js';

const EditCarForm = () => {
    const { state } = useLocation();
    const { id } = state;
    const dispatch = useDispatch();
    const [err, setErr] = useState("");
    const [formState, setFormState] = useState({
        id: null,
        model: "",
        year: "",
        numSeats: "",
        fuelType: "",
        category: "",
        brand: "",
        engine: "",
        color: ""
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
                console.log(err)
                setErr("Err")
                return;
            }
        }

        editCarAPI(formState);
    }

    const handleDeleteButtonClick = (e) => {
        e.preventDefault();

        deleteCarAPI(formState.id);
    }

    useEffect(() => {
        async function data() {
            dispatch(toggleIsCarsLoaded());
            const response = await getCarAPI(id);

            setFormState({
                id: response.id,
                model: response.Modelo,
                year: response.Ano,
                numSeats: response.NumAssentos,
                fuelType: response.TipoCombustivel,
                category: response.Categoria,
                brand: response.Marca,
                engine: response.Motor,
                color: response.Cor
            })
        };

        data()
    }, [])

    return (
        <>
        {   
            
            formState.id !== null ?
                <>
                {
                    err !== "" && <ToastContainer position='top-end'>
                        <ErrorMessage />
                    </ToastContainer>
                }
                <div className="container-fluid p-5 border border-1 rounded">
                    <Form className='border border-1 rounded'>
                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicEmail">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Control value={formState.model} name='Model' onChange={(e) => handleFormChange(e, "model")} type="text" placeholder="Digite o modelo do carro" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicEmail">
                                <Form.Label>Ano</Form.Label>
                                <Form.Control value={formState.year} name='Year' onChange={(e) => handleFormChange(e, "year")} type="text" placeholder="Digite o ano de fabricação" />
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Número de assentos</Form.Label>
                                <Select name='numSeats' options={NumberOfSeatsOptions} onChange={(e) => handleFormChange(e, "numSeats")} defaultValue={{ value: formState.numSeats, label: formState.numSeats }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Tipo de combustível</Form.Label>
                                <Select name='fuelType' options={FuelTypeOptions} onChange={(e) => handleFormChange(e, "fuelType")} defaultValue={{ value: formState.fuelType, label: formState.fuelType }}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Categoria</Form.Label>
                                <Select name='category' options={CategoryOptions} onChange={(e) => handleFormChange(e, "category")} defaultValue={{ value: formState.category, label: formState.category }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Marca</Form.Label>
                                <Select name='brand' options={BrandOptions} onChange={(e) => handleFormChange(e, "brand")} defaultValue={{ value: formState.brand, label: formState.brand }}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Motor</Form.Label>
                                <Select name='engine' options={EngineOptions} onChange={(e) => handleFormChange(e, "engine")} defaultValue={{ value: formState.engine, label: formState.engine }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                                <Form.Label>Cor</Form.Label>
                                <Select name='color' options={ColorOptions} onChange={(e) => handleFormChange(e, "color")} defaultValue={{ value: formState.color, label: formState.color }}/>
                            </Form.Group>
                        </div>

                        <Accordion>
                            <Defect idKey={1}/>
                            <Defect idKey={2}/>
                        </Accordion>

                        <div className='d-flex justify-content-evenly my-3'>
                            <Button variant="danger" type="submit" onClick={handleDeleteButtonClick}>
                                Deletar
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleEditButtonClick}>
                                Editar
                            </Button>
                        </div>
                    </Form>
                </div>
                </>
            :
                <SpinnerComponent/>
        }
        </>
    )
}

export default EditCarForm;