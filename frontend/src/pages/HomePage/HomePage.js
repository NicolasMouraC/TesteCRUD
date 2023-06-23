import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from '../../components/Card.js';
import DropdownMenu from '../../components/Dropdown.js';
import { getCarsAPI } from '../../services/api.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars, selectIsCarsLoaded, setCars, toggleIsCarsLoaded } from '../../redux/slices/carsSlice.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpinnerComponent from '../../components/SpinnerComponent.js';

const HomePage = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsCarsLoaded);
    const cars = useSelector(selectCars);
    const navigate = useNavigate();

    useEffect(() => {
        async function data() {
            dispatch(toggleIsCarsLoaded());
            const cars = await getCarsAPI();
            dispatch(setCars({ cars: cars }))
        };

        data()
    }, [])

    return (
        <div className="container-fluid p-5 border border-1 rounded w-100">
            <div className="border border-1 rounded d-flex align-items-center">
                <InputGroup className="m-3 w-50">
                    <InputGroup.Text id="basic-addon1">{<DropdownMenu />}</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="d-flex  w-50 flex-wrap justify-content-end m-3">
                    <button className="btn btn-info" onClick={() => navigate('/create')}>
                        Criar novo registro
                    </button>
                </div>
            </div>
            {
                isLoaded ?
                    cars.map((el, idx) => {
                        return <Card info={el} key={idx}/>
                    })
                : 
                    <SpinnerComponent />
            }
        </div>
    )
}

export default HomePage;