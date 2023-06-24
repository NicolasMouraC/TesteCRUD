import HomePage from '../pages/HomePage/HomePage.js';
import CreateCarForm from '../pages/CarForm/CreateCarForm/CreateCarForm.js';
import EditCarForm from '../pages/CarForm/EditCarForm.js/EditCarForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessages } from '../redux/slices/messagesSlice.js';
import MessagePopUp from '../components/MessagePopUp.js';
import ToastContainer from 'react-bootstrap/ToastContainer';

const WebStack = () => {
  const messages = useSelector(selectMessages);

  return (
    <Router>
      {
          messages.length !== 0  && 
          <ToastContainer position='top-end'>
              {
                  messages.map(message => <MessagePopUp title={message.title} message={message.message} messageId={message.id} key={message.id}/>).reverse()
              }
          </ToastContainer>
      }
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/edit/:id"
          element={<EditCarForm />}
        />
        <Route
          path="/create"
          element={<CreateCarForm />}
        />
      </Routes>
    </Router>
  );
};

export default WebStack;