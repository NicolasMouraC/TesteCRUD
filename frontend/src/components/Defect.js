import Accordion from 'react-bootstrap/Accordion';

const Defect = ({idKey, title, gravity, description}) => {
    return (
        <Accordion.Item eventKey={idKey} className={gravity === 'Baixa' ? "bg-success-subtle" : gravity === "Média" ? "bg-warning-subtle" : "bg-danger-subtle"}>
            <Accordion.Header>
                <div>
                    {"Defeito: " + title}
                </div>
                <div className='ms-5'>
                    {"Gravidade: " + gravity}
                </div>
            </Accordion.Header>
            <Accordion.Body className='text-wrap'>
                {description}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Defect;