import HomePage from '../pages/HomePage/HomePage.js';
import CreateCarForm from '../pages/CarForm.js/CreateCarForm/CreateCarForm.js';
import EditCarForm from '../pages/CarForm.js/EditCarForm.js/EditCarForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const WebStack = () => {
  return (
    <Router>
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