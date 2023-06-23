import Spinner from "react-bootstrap/esm/Spinner";

const SpinnerComponent = () => {
    return (
        <div className="container my-3 border border-1 rounded w-100">
            <div className="d-flex justify-content-center">
                <Spinner animation="grow" variant="primary" />
            </div>
        </div>
    )
}

export default SpinnerComponent;