import React from 'react';
import "../assets/styles/body.css"
import coverImage from '../assets/pictures/cover-photo.jpg';

// import {useState} from 'react'

function Body(){
 
      
    return(
    <main>
        <div>
         <p>Hi, My name is Aaron and I am a deveoper.</p>   
         <img src={coverImage} className="my-2 img-responsive" style={{ width: "100%" }} alt="cover" />
    
        </div>
    </main>
    )
}

export default Body