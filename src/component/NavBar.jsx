import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ user, logout }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    user ? console.log(user.name) : console.log("Not found");
    navigate('/signup');
  };

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'Guest'}</h1>
      {user && user.role === "Admin" ? (
        <>
          <button onClick={logout}>Logout</button>
          <button onClick={() => navigate("/admin")}>Admin</button>
        </>
      ) : user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <button onClick={handleSignUpClick}>Sign Up</button>
          <button onClick={() => navigate('/signin')}>Log In</button>
        </div>
      )}
    </div>
  );
}
