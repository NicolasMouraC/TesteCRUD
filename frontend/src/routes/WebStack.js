import HomePage from '../pages/HomePage/HomePage.js';
import CreateCarForm from '../pages/CarForm.js/CreateCarForm/CreateCarForm.js';
import EditCarForm from '../pages/CarForm.js/EditCarForm.js/EditCarForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectErrors } from '../redux/slices/errorsSlice.js';
import ErrorMessage from '../components/ErrorMessage.js';
import ToastContainer from 'react-bootstrap/ToastContainer';

const WebStack = () => {
  const err = useSelector(selectErrors);

  return (
    <Router>
      {
          err.length !== 0  && 
          <ToastContainer position='top-end'>
              {
                  err.map(error => {
                      return (
                          <ErrorMessage title={error.title} message={error.message} errorId={error.id} key={error.id}/>
                      )
                  })
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