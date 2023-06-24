import Dropdown from 'react-bootstrap/Dropdown';
import { selectFilter, setFilter } from '../redux/slices/filterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const DropdownMenu = () => {
    const selectedFilter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleClick = (filter) => {
        dispatch(setFilter({ filter: filter }));
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {selectedFilter}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleClick("Modelo")}>Modelo</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Marca")}>Marca</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Cor")}>Cor</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Categoria")}>Categoria</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownMenu;