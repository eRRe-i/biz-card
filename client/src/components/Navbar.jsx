import React from "react"
import './../css/navbar.css'

export default function Navbar() {

    return (
        <nav className="navbar">
            <a href="#"><img className="navbar-logo" src="./mini-logo.jpg" alt="page logo" /></a>
            <ul>
                <li>Crie seu perfil!</li>
            </ul>
        </nav>
    )
}