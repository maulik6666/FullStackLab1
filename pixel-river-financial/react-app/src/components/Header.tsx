import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from '@clerk/clerk-react';

const Header: React.FC = () => {
    return (
        <header className='app-header'>
            <nav className="navbar">
                <div className="logo">
                    <img src="/src/assets/logo.png" alt="Pixel River Financial Logo" />
                </div>
                <div className="nav-links">
                    <Link to="/employees">Employees</Link>
                    <Link to="/organization">Organization</Link>
                </div>
                <div className="auth-section">
                    <SignedOut>
                        <SignInButton>
                            <button className="sign-in-button">Sign In</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
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