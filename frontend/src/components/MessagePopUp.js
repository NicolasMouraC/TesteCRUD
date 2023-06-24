import Toast from 'react-bootstrap/Toast';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../redux/slices/messagesSlice';

const MessagePopUp = ({title, message, messageId}) => {
  const dispatch = useDispatch();
    const deleteThisMessage = () => {
      dispatch(deleteMessage({ messageId: messageId }))
    };

    return (
        <Toast onClose={deleteThisMessage}>
          <Toast.Header>
            <strong className={"me-auto " + (title === "Sucesso" ? "text-success" : "text-danger")}>{title}</strong>
            <small>Pop-up</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default MessagePopUp;