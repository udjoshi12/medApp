import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate('/login'); // Redirect to "/login" path
  };

  return (
    <nav>
      <div className="nav__logo">MEDEase</div>
      <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">About Us</a></li>
        <li className="link"><a href="#">Courses</a></li>
        <li className="link"><a href="#">Pages</a></li>
        <li className="link"><a href="#">Blog</a></li>
        <li className="link"><a href="#">Contact</a></li>
      </ul>
      <div>
        <button className="btn" onClick={handleLogin}>Login</button>
        <button className="btn">Register Now</button>
      </div>
    </nav>
  );
}

export default Header;
