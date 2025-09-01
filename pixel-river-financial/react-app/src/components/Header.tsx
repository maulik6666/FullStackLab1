import * as React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-content">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="Pixel River Financial Logo" />
          </div>
          <h1 className="site-title">Welcome to Pixell River People Hub</h1>
        </div>
        <p className="greeting">Welcome to our Employee Directory</p>
    </header>
  );
};

export default Header;