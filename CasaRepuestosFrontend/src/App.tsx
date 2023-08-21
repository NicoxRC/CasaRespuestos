import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/editProduct" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
