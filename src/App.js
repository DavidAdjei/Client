import './App.css';
import React, {useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './component/NavBar';
import axios from 'axios';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/LogIn/LogIn';
import Homepage from './Pages/HomePage/Homepage';
import { useUser } from './context/userContext';
import { useAllProducts } from './context/productContext';
import Admin from './Pages/AdminPanel/Admin';
import NewProduct from './Pages/AdminPanel/NewProduct';

function App() {
  const { user, logout } = useUser();
  const { products, setAllProducts } = useAllProducts();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/products");
        console.log(data.products);
        setAllProducts(data.products);
      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts();
  }, []);
  
  return (
    <div className='container'>
      <NavBar
        user={user}
        logout={logout}
      />
      <div className='main'>
        <Routes>
          <Route exact path='/' element={user ?
            <Homepage
              products={products}
              setProducts={setAllProducts}
          /> : <Navigate to="/signin" />} />
          <Route exact path='/admin' element = {user ? <Admin/> : <Navigate to="/" />}/>
          <Route exact path='/newProduct' element={user ?  <NewProduct/> : <Navigate to="/" />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<Login />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
