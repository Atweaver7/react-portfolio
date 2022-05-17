import React from 'react';
import "../assets/styles/body.css"
import coverImage from '../assets/pictures/cover-photo.jpg';

// import {useState} from 'react'

function Body(){
 
      
    return(
    <main>
        <div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic itaque commodi fugit id dolores voluptates, voluptatem obcaecati tenetur voluptatum laudantium, corporis eaque magnam nesciunt molestiae ipsa facere ad quia!</p>   
         <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    
        </div>
    </main>
    )
}

export default Body