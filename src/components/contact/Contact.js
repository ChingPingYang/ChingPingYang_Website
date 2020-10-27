import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    window.alert("Thank you! I will get back to you shortly.");
  }
  return (
    <section id="contact_container">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1>SEND ME A MESSAGE</h1>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Email" />
        <label>Message</label>
        <textarea name="message" placeholder="Message" />
        <button type="submit" className="send_btn">
          SEND
        </button>
      </form>
    </section>
  );
};

export default Contact;
