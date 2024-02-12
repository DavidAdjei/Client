import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./component.css";
import Logo from '../assets/images/Logo.jpeg'

export default function NavBar({ user, logout }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    user ? console.log(user.name) : console.log("Not found");
    navigate('/signup');
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <h1 className='nav_welcome'><Link to="/" className='nav_logo'><img src={Logo} alt="Logo" /></Link></h1>
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
