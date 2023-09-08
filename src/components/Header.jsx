import React from "react";

export default function Header(){
    return(
        <navbar className="header">
             <img src="../public/images/troll-face.png" className="troll-face"/>
             <h2 className="header--title">Meme Generator</h2>
             <h4 className="header--project">React Course - Project 3</h4>
        </navbar>
    )
}