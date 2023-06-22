import HomePage from '../pages/HomePage/HomePage.js';
import CarForm from '../pages/CarForm.js/CarForm.js';
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
          path="/edit"
          element={<CarForm />}
        />
      </Routes>
    </Router>
  );
};

export default WebStack;