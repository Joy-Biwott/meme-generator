import React from "react";
// import memes from "../memesData.js";
import memesData from "../memesData.js";

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

export default function Meme (){
    // const [image, setImage] = React.useState("https://i.imgflip.com/1bhw.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1bhw.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getMemeImage(){
        const memesArr= allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            url: url
        }))
        
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
                <img src={meme.url}  alt="meme" className="meme--image"/>
            </div>
        </main>
    )
}