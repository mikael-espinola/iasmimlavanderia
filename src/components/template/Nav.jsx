import React from "react";
import "./Nav.css";

export default props =>
<header className="menu-area">
    <nav className="menu">
        <a href="/">
            <i className="fa fa"></i> Início
        </a>
        <a href="/services">
            <i className="fa fa-home"></i> Serviços
        </a>
        <a href="/info">
            <i className=" fa fa-info"></i>  Sobre
        </a>
        <a href="/login">
        <i className="fa fa-user" ></i> Login
        </a>
    </nav>
</header>