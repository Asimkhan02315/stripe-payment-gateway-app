import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import Cancel from './components/Cancel';
import Sucess from './components/Sucess';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/sucess' element={<Sucess />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;