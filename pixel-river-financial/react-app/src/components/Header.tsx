import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo-container">
          <div className="logo">PRF</div>
          <h1 className="site-title">Pixel River Financial</h1>
        </div>
        <p className="greeting">Welcome to our Employee Directory</p>
      </div>
    </header>
  );
};

export default Header;