import './App.css';
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './component/NavBar';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/LogIn/LogIn';
import Homepage from './Pages/HomePage/Homepage';
import { useUser } from './context/userContext';
import Admin from './Pages/AdminPanel/Admin';
import NewProduct from './Pages/AdminPanel/NewProduct';

function App() {
  const { user, logout } = useUser();
  return (
    <>
      <NavBar
        user={user}
        logout={logout}
      />
      <Routes>
      <Route exact path='/' element={user ? <Homepage /> : <Navigate to="/signin" />}/>
      <Route exact path='/admin' element = {user ? <Admin/> : <Navigate to="/" />}/>
      <Route exact path='/newProduct' element={user ?  <NewProduct/> : <Navigate to="/" />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/signin' element={<Login />} />
    </Routes>
    </>
    
  );
}

export default App;
