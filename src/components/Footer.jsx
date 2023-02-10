import React from "react"
import "./../css/style.css"

export default function Footer() {
    return (
        <div className="footer">
            <button className="container">
                <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button className="container">
                 <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button className="container">
                <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button className="container">
                <ion-icon name="logo-github"></ion-icon>
            </button>
        </div>
    );
}