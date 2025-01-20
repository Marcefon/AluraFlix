import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return <header className="header">
        <img className="logo" src="/img/Logo.png" alt="Logotipo" />
        <div className="botones1">
            <button className="home">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                     HOME
                </Link>
            </button>

            <button className="nuevo">
                <Link to="/nuevo-video" style={{ textDecoration: "none", color: "white" }}>
                     NUEVO VIDEO
                </Link>
            </button>
        </div>
    </header>
}

export default Header
