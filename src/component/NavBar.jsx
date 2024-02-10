import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./component.css"

export default function NavBar({ user, logout }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    user ? console.log(user.name) : console.log("Not found");
    navigate('/signup');
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <h1 className='nav_welcome'>Welcome, {user ? user.name : 'Guest'}</h1>
        {user && user.role === "Admin" ? (
          <div className='button_container'>
            <button onClick={logout}>Logout</button>
            <button onClick={() => navigate("/admin")}>Admin</button>
          </div>
        ) : user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div className='button_container'>
            <button onClick={handleSignUpClick}>Sign Up</button>
            <button onClick={() => navigate('/signin')}>Log In</button>
          </div>
        )}
      </nav>
      
    </header>
  );
}
