import React from "react";
import memes from "../memesData.js";

/**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

console.log(memes)
export default function Meme (){
    const [image, setImage] = React.useState("")
    function getMemeImage(){
        const memesArr= memes.data.memes
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        setImage(url)
        
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
                <img src={image}  alt="meme" className="meme--image"/>
            </div>
        </main>
    )
}