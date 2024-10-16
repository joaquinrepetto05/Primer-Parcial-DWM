import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Details from './paginas/Details';
import Home from './paginas/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta a home */}
          <Route path="/dishes/:id" element={<Details />} /> {/* Ruta a details */}
        </Routes>
      </Router>
    </>
  );
}

export default App;