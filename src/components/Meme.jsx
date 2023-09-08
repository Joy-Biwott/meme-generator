import React from "react";
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

export default function Meme (){
    return (
        <main>
            <form className="form">
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
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}