import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright &copy; Pixell River Financial {currentYear}.
        </footer>
    );
};

export default Footer;