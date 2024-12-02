// src/Header.js
import React from 'react';
import logo from '../images/logo.png';

function Header({ toggleDarkMode }) {
  return (

<header>
<div class="logo">
<img src={logo} alt="App Logo" />
</div>
<nav>
    <a href="#" class="nav-link">Features</a>
</nav>
<div class="header-actions">
    <div class="dark-mode-toggle">
        <span>Dark Mode</span>
        <label class="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span class="slider round"></span>
        </label>
    </div>
    <button class="sign-in-button">
    Sign in / up
    </button>
</div>
</header>



  );
}

export default Header;
