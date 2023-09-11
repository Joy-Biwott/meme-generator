import React from "react";
import memesData from "../memesData.js";

export default function Meme (){
    // const [image, setImage] = React.useState("https://i.imgflip.com/1bhw.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1bhw.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    // function getMemeImage(){
    //     const memesArr= allMemeImages.data.memes
    //     const randomNum = Math.floor(Math.random() * memesArr.length)
    //     const url = memesArr[randomNum].url
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         url: url
    //     }))
    function handleSubmit(e){
        e.preventDefault()
        const memesArr= allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            url: url
        }))
    }
    function handleChange(e){
        setMeme(prevMeme => ({
            ...prevMeme,
            [e.target.name] : e.target.value
        }))
    }
        
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                   <input 
                    type="text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className="form--input" 
                    placeholder="Top text"
                   />
                   <input 
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className="form--input"
                    placeholder="Bottom text"
                   />                
                <button className="form--button">Get a new meme image 🖼</button>
                <img src={meme.url}  alt="meme" className="meme--image"/>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}