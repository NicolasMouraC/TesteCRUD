import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select';
import Defect from '../../components/Defect.js';
import { BrandOptions, CategoryOptions, ColorOptions, EngineOptions, FuelTypeOptions, NumberOfSeatsOptions } from './FormOptions.js';

const CarForm = () => {
    return (
        <div className="container-fluid p-5 border border-1 rounded">
            <Form className='border border-1 rounded'>
                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicEmail">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Digite o modelo do carro" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicEmail">
                        <Form.Label>Ano</Form.Label>
                        <Form.Control type="text" placeholder="Digite o ano de fabricação" />
                    </Form.Group>
                </div>

                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Número de assentos</Form.Label>
                        <Select options={NumberOfSeatsOptions}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Tipo de combustível</Form.Label>
                        <Select options={FuelTypeOptions}/>
                    </Form.Group>
                </div>

                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Categoria</Form.Label>
                        <Select options={CategoryOptions}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Marca</Form.Label>
                        <Select options={BrandOptions}/>
                    </Form.Group>
                </div>

                <div className='d-flex align w-100'>
                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Motor</Form.Label>
                        <Select options={EngineOptions}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-3" controlId="formBasicPassword">
                        <Form.Label>Cor</Form.Label>
                        <Select options={ColorOptions}/>
                    </Form.Group>
                </div>

                <Accordion>
                    <Defect idKey={1}/>
                    <Defect idKey={2}/>
                </Accordion>

                <div className='d-flex justify-content-center my-3'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default CarForm;