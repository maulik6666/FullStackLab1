import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/src/assets/logo.png" alt="Pixel River Financial Logo" />
                </div>
                <div className="nav-links">
                    <a href="#">Employees</a>
                    <a href="#">Organization</a>
                </div>
            </nav>
            <h1>Welcome to Pixell River People Hub</h1>
            <p>Your one-stop source for company employee and organization data.</p>
        </header>
    );
};

export default Header;