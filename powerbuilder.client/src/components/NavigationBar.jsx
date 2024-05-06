// powerbuilder.client/src/components/NavigationBar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/styles.css';

const NavigationBar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <h1>PowerBuilder</h1>
            <div className="navbar-links">
                <Link to="/dashboard" className={`navbar-link ${isActive('/dashboard') ? 'navbar-link-active' : ''}`}>
                    Dashboard
                </Link>
                <Link to="/exerciselist" className={`navbar-link ${isActive('/exerciselist') ? 'navbar-link-active' : ''}`}>
                    Exercises
                </Link>
                <Link to="/settings" className={`navbar-link ${isActive('/settings') ? 'navbar-link-active' : ''}`}>
                    Settings
                </Link>
            </div>
            <div className="navbar-icon" onClick={toggleMenu}>
                ☰
            </div>
            {menuOpen && (
                <div className="navbar-menu">
                    <Link to="/dashboard" className={`navbar-link ${isActive('/dashboard') ? 'navbar-link-active' : ''}`}>
                        Dashboard
                    </Link>
                    <Link to="/exerciselist" className={`navbar-link ${isActive('/exerciselist') ? 'navbar-link-active' : ''}`}>
                        Exercises
                    </Link>
                    <Link to="/settings" className={`navbar-link ${isActive('/settings') ? 'navbar-link-active' : ''}`}>
                        Settings
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
