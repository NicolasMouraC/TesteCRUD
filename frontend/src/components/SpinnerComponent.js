import Spinner from "react-bootstrap/esm/Spinner";

const SpinnerComponent = () => {
    return (
        <div className="container-fluid d-inline-block my-3 w-100 h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
                <Spinner animation="grow" variant="primary"/>
            </div>
        </div>
    )
}

export default SpinnerComponent;