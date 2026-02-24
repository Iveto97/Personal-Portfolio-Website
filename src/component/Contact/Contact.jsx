import "./Contact.css";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7u7b586",
        "template_apfnjkr",
        form.current,
        "qh6xk4jiFFAzSOiCP",
      )
      .then((result) => {
        console.log("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        console.log("Error:", error.text);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>
          Contact <span>Me</span>
        </h2>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Company Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can I Help You?</label>
              <textarea
                name="message"
                id="textarea"
                rows="10"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
