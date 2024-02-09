import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './component/NavBar';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <NavBar/>
      <SignUp/>
    </>
    
  );
}

export default App;
