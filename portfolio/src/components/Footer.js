// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // We'll create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Puree Pangma. All rights reserved.</p>
                {/* Add more footer content here if needed */}
            </div>
        </footer>
    );
};

export default Footer;
