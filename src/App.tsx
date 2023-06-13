import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CounterPage from './pages/Counter';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
