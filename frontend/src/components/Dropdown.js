import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic" />
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                    Filtro 1
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Filtro 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Filtro 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownMenu;