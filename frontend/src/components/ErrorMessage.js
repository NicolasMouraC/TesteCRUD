import Toast from 'react-bootstrap/Toast';
import { useDispatch } from 'react-redux';
import { deleteError } from '../redux/slices/errorsSlice';

const ErrorMessage = ({title, message, errorId}) => {
  const dispatch = useDispatch();
    const deleteThisError = () => {
      dispatch(deleteError({ errorId: errorId }))
    };

    return (
        <Toast onClose={deleteThisError}>
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default ErrorMessage;