import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from '../../components/Card.js';
import DropdownMenu from '../../components/Dropdown.js';

const HomePage = () => {
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
                    <button className="btn btn-info">
                        Criar novo registro
                    </button>
                </div>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default HomePage;