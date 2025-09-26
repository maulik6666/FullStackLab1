import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/src/assets/logo.png" alt="Pixel River Financial Logo" />
                </div>
                <div className="nav-links">
                    <Link to="/employees">Employees</Link>
                    <Link to="/organization">Organization</Link>
                </div>
            </nav>
            <h1>Welcome to Pixell River People Hub</h1>
            <p>Your one-stop source for company employee and organization data.</p>
            <p>If you're looking for Employee Data, navigate to <strong>Employees</strong></p>
            <p>If you're looking for Organization Data, navigate to <strong>Organization</strong></p>
        </header>
    );
};

export default Header;