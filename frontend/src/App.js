import './App.css';
import Home from './pages/public/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/public/Contact';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element= {<Contact/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
