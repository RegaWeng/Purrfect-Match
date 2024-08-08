import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Services';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Catcom. All right reserved.</p>
                <ul className="footer-links">
                   <li><Link to="./Service" >Our services</Link></li>
                    <li><Link to="./Contact" >Contact</Link></li>
                </ul>
                <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <i className="Purrfect"></i>
                        <p>purrfect.com/example</p>
                    </div>
                    <div className="contact-item">
                        <i className="Contact"></i>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;