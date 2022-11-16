import React from 'react'
import Clothes from './Clothes'
import Measurements from './Measurements'
import Avatar from "./avatar/avatar"
import Article from './Article'
import { useState, useEffect } from 'react'

export default function FittingRoom() {

const [slideIn, setSlideIn] = useState({ transform: "translate(100vw, 0%)" });
const [toggle, setToggle] = useState(false);
function handleVF() {
  if (toggle == true) {
    // setShow("");
    setSlideIn({ transform: "translate(100vw, 0%)" });
  } else {
    setSlideIn({ transform: "translate(0%, 0%)" });
  }
  setToggle((prevCheck) => !prevCheck);
}
const text = ["Comfort ", "Style ", "Relaxation", "Personal"];
const [word, setWord] = useState("");

let index = 0;
useEffect(() => {
  const interval = setInterval(() => {
    setWord(text[index++ % text.length]);
  }, 3000);
  return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className='vfButton' onClick={handleVF}>Click Me!</div>
      <div className='fitting-room'>
      <div className="home">
      Your fit is
      <div className="container">
        <div className="typed-out">{word}</div>
      </div>
    </div>
        <Avatar slideIn={slideIn}></Avatar>
        {/* <div className='silhouette'>Silhouette</div> */}
        {/* <div className='clothing'>
          {dummyData.map((data) =>
            <Article Clothes={data.Clothes} />
            
            )}
         
        </div> */}
      </div>
      {/* <Measurements /> */}
    </>
  )
}
