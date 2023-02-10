import React from "react"


export default function Info() {
    return (
            <div className="info">
                <img className="info--img" alt="person logo" src="./lohn_doe.jpg"/>
                <h1 className="info--title">John Doe</h1>
                <h2 className="info--job-info">Smug know-it-all</h2>
                <p className="info--email">johndoe.website</p>
                <div className="info--buttons">
                    <button className="info--buttons-email">
                        <ion-icon name="mail"></ion-icon>
                        <p>Email</p>
                    </button>
                    <button className="info--buttons-linkedin">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <p>Linkedin</p>
                    </button>
                </div>
            </div>
    );
}