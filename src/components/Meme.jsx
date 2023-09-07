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
        <div>
            <form>
                <div className="input">
                   <input type="text" />
                   <input type="text" className="input-2"/><br/> 
                </div>
                
                <button>Get a new meme image</button>
            </form>
        </div>
    )
}