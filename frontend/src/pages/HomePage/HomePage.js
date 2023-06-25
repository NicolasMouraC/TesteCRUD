import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from '../../components/Card.js';
import DropdownMenu from '../../components/DropdownMenu.js';
import { getCarsAPI, getFilteredCarsAPI } from '../../services/carsApi.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars, selectIsCarsLoaded, setCars, toggleIsCarsLoaded } from '../../redux/slices/carsSlice.js';
import { selectFilter } from '../../redux/slices/filterSlice.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpinnerComponent from '../../components/SpinnerComponent.js';

const HomePage = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoaded = useSelector(selectIsCarsLoaded);
    const cars = useSelector(selectCars);
    const filter = useSelector(selectFilter);

    useEffect(() => {
        async function getTotalData() {
            dispatch(toggleIsCarsLoaded());
            const carsFromAPI = await getCarsAPI();
            dispatch(setCars({ cars: carsFromAPI }));
        };

        async function getFilteredData() {
            dispatch(toggleIsCarsLoaded());
            const carsFromAPI = await getFilteredCarsAPI(filter, searchTerm);
            dispatch(setCars({ cars: carsFromAPI }));
        }

        searchTerm === "" ? getTotalData() : getFilteredData();
    }, [searchTerm, dispatch, filter])

    return (
        <>
            <div className="border border-1 rounded d-flex align-items-center bg-primary-subtle">
                <InputGroup className="m-3 w-50">
                    <InputGroup.Text id="procurar">{<DropdownMenu />}</InputGroup.Text>
                    <Form.Control
                    placeholder="Procurar..."
                    aria-label="Procurar..."
                    aria-describedby="procurar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                <div className="d-flex  w-50 flex-wrap justify-content-end m-3">
                    <button className="btn btn-primary" onClick={() => navigate('/create')}>
                        Criar novo registro
                    </button>
                </div>
            </div>
            {
                isLoaded ?
                    cars.map((el, idx) => <Card info={el} key={idx}/>)
                : 
                    <SpinnerComponent />
            }
        </>
    )
}

export default HomePage;