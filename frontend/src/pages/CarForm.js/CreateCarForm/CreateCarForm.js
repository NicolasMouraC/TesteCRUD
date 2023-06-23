import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { BrandOptions, CategoryOptions, ColorOptions, EngineOptions, FuelTypeOptions, NumberOfSeatsOptions } from '../FormOptions.js';
import { useState } from 'react';
import { createCarAPI } from '../../../services/api.js';

const CreateCarForm = () => {

    const [formState, setFormState] = useState({
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

    const handleButtonClick = (e) => {
        e.preventDefault();
        createCarAPI(formState);
    }

    return (
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
                        <Select name='numSeats' options={NumberOfSeatsOptions} onChange={(e) => handleFormChange(e, "numSeats")}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Tipo de combustível</Form.Label>
                        <Select name='fuelType' options={FuelTypeOptions} onChange={(e) => handleFormChange(e, "fuelType")}/>
                    </Form.Group>
                </div>

                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Categoria</Form.Label>
                        <Select name='category' options={CategoryOptions} onChange={(e) => handleFormChange(e, "category")}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Marca</Form.Label>
                        <Select name='brand' options={BrandOptions} onChange={(e) => handleFormChange(e, "brand")}/>
                    </Form.Group>
                </div>

                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Motor</Form.Label>
                        <Select name='engine' options={EngineOptions} onChange={(e) => handleFormChange(e, "engine")}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Cor</Form.Label>
                        <Select name='color' options={ColorOptions} onChange={(e) => handleFormChange(e, "color")}/>
                    </Form.Group>
                </div>

                <div className='d-flex justify-content-center my-3'>
                    <Button variant="primary" type="submit" onClick={handleButtonClick}>
                        Criar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default CreateCarForm;