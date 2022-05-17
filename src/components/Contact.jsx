import React from "react";
import "../assets/styles/contact.css"

function Contact() {
  function formSubmit(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
   
    console.log(name,email,message)
  }
  return (
    <form onSubmit={(event) => {formSubmit(event)}}>
      <h2> Contact me </h2>
      <div>
        <label>Name:  </label>
        <input id="name" type="text" name="name"></input>
      </div>
      <div>
        <label>Email Address:  </label>
        <input id="email" type="text" name="email"></input>
      </div>
      <div>
        <label >Message:</label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>
      <button class="btn btn-primary btn-lg" type="submit">Get in Touch</button>
    </form>
  );
}

export default Contact;
