import React from "react";

export default function Header(){
    return(
        <nav className="header--nav">
        <img className="header--logo" src="/images/troll-face.png"  />
        <h1 className="header--heading">Meme Generator</h1>
        <h3 className="header--heading--two">Built using React</h3>
        </nav>
    )
}