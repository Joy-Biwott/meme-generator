import React from "react";
import './index.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./memesData"

function App (){
  return(
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App;