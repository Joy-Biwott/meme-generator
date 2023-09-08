import React from "react";
import memes from "../memesData.js";
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
console.log(memes)
export default function Meme (){
    function getMemeImage(){
        const memesArr= memes.data.memes.map(())
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        return <img src={url}  alt="meme"/>
    }
    return (
        <main>
            <div className="form">
                   <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                   />
                   <input 
                    type="text" 
                    className="form--input"
                    placeholder="Bottom text"
                   />                
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}