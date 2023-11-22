import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Card from './components/Card.jsx';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound.jsx';
import Login from './components/Login';
import Register from './components/Register'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SearchResult from './components/SearchResult.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="*" element={<NotFound />} />
          <Route path="/searchresult" element={< SearchResult />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
