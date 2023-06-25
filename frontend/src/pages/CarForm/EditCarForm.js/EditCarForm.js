import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { BrandOptions, CategoryOptions, ColorOptions, EngineOptions, FuelTypeOptions, NumberOfSeatsOptions } from '../FormOptions.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCarAPI, deleteCarAPI, getCarAPI, updateCarImageAPI } from '../../../services/carsApi.js';
import { useLocation } from 'react-router-dom';
import { toggleIsCarsLoaded } from '../../../redux/slices/carsSlice.js';
import { addMessage } from '../../../redux/slices/messagesSlice.js';
import SpinnerComponent from '../../../components/SpinnerComponent.js';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/esm/Image.js';

const EditCarForm = () => {
    const [ imagePreview, setImagePreview ] = useState('');
    const { state } = useLocation();
    const { id } = state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        id: null,
        image: "",
        model: "",
        year: "",
        numSeats: "",
        fuelType: "",
        category: "",
        brand: "",
        engine: "",
        color: ""
    });

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(event.target.files[0])
            setFormState(prev => {
                return { ...prev, image: file };
            })
        }
    };

    const handleFormChange = (event, name) => {
        if (event.hasOwnProperty('label')) {
          setFormState((prev) => {
            return { ...prev, [name]: event.value };
          });
        } else {
            if (name === 'image') {
                handleImagemChange(event)
            } else {
                setFormState((prev) => {
                    return { ...prev, [name]: event.target.value };
                });
            }
        }
    };

    const handleEditButtonClick = async (e) => {
        e.preventDefault();

        for (let key in formState) {
            if (formState[key] === "") {
                dispatch(addMessage({ title: "Erro", message: "Preencha todos os campos" }));
                return;
            }
        }

        const formData = new FormData();
        formData.append('image', formState.image);


        await editCarAPI(formState);
        await updateCarImageAPI({ id: formState.id, image: formData })
        dispatch(addMessage({ title: "Sucesso", message: "Carro editado com sucesso" }));
        
        navigate('/');
    }

    const handleDeleteButtonClick = (e) => {
        e.preventDefault();

        dispatch(addMessage({ title: "Sucesso", message: "Carro deletado com sucesso" }))
        deleteCarAPI(formState.id);
        navigate('/');
    }

    useEffect(() => {
        async function data() {
            dispatch(toggleIsCarsLoaded());
            const response = await getCarAPI(id);

            setFormState({
                id: response.id,
                image: response.Imagem_url,
                model: response.Modelo,
                year: response.Ano,
                numSeats: response.NumAssentos,
                fuelType: response.TipoCombustivel,
                category: response.Categoria,
                brand: response.Marca,
                engine: response.Motor,
                color: response.Cor
            })

            setImagePreview(`http://localhost:8000/storage/${response.Imagem_url}`);
        };

        data()
    }, [])

    return (
        <>
        {   
            formState.id !== null ?
                <div className="container-fluid p-5 border border-1 rounded">
                    <Form className='border border-1 rounded'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Image src={imagePreview} style={{ width: 150, height: 150 }} roundedCircle/>
                            <input type="file" name="image" onChange={(e) => handleFormChange(e, "image")} id='file-id' className='w-25 ms-3'/>
                        </div>
                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Control value={formState.model} name='Model' onChange={(e) => handleFormChange(e, "model")} type="text" placeholder="Digite o modelo do carro" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Ano</Form.Label>
                                <Form.Control value={formState.year} name='Year' onChange={(e) => handleFormChange(e, "year")} type="text" placeholder="Digite o ano de fabricação" />
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Número de assentos</Form.Label>
                                <Select name='numSeats' options={NumberOfSeatsOptions} onChange={(e) => handleFormChange(e, "numSeats")} defaultValue={{ value: formState.numSeats, label: formState.numSeats }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Tipo de combustível</Form.Label>
                                <Select name='fuelType' options={FuelTypeOptions} onChange={(e) => handleFormChange(e, "fuelType")} defaultValue={{ value: formState.fuelType, label: formState.fuelType }}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Categoria</Form.Label>
                                <Select name='category' options={CategoryOptions} onChange={(e) => handleFormChange(e, "category")} defaultValue={{ value: formState.category, label: formState.category }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Marca</Form.Label>
                                <Select name='brand' options={BrandOptions} onChange={(e) => handleFormChange(e, "brand")} defaultValue={{ value: formState.brand, label: formState.brand }}/>
                            </Form.Group>
                        </div>

                        <div className='d-flex align w-100'>
                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Motor</Form.Label>
                                <Select name='engine' options={EngineOptions} onChange={(e) => handleFormChange(e, "engine")} defaultValue={{ value: formState.engine, label: formState.engine }}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mx-3">
                                <Form.Label>Cor</Form.Label>
                                <Select name='color' options={ColorOptions} onChange={(e) => handleFormChange(e, "color")} defaultValue={{ value: formState.color, label: formState.color }}/>
                            </Form.Group>
                        </div>

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
            :
                <SpinnerComponent/>
        }
        </>
    )
}

export default EditCarForm;