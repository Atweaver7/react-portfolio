import React from 'react';
import "../assets/styles/body.css"
import coverImage from '../assets/pictures/cover-photo.jpg';

// import {useState} from 'react'

function Body(){
 
      
    return(
    <main>
        <div className="top bottom">
         <p className="text-center">Hi, my name is Aaron and I am a developer.</p>   
         <img src={coverImage} className="my-2 img-responsive" style={{ width: "100%" }} alt="cover" />
    
        </div>
    </main>
    )
}

export default Body