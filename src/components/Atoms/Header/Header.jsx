import React from "react";
import './Header.css';
import logo from '../../../assets/logo.png';

function Header() {
    return (
        <>
            <header className="header-productos-increibles">
                <div className="logo-container">
                    <img src={logo} alt="logo-tienda" className="logo" />
                    <h1 className="name-title">Productos Increibles</h1>
                </div>
                <div className="buttons-container">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Registrarse</button>
                </div>
            </header>
        </>
    );
}

export default Header;
