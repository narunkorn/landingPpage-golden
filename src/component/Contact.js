import "./Contact.css";
import React from "react";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");
  const onSubmit = () => {
    alert(`
        Name: ${name}
         E-mail: ${email}
         Subject: ${subject}
         Massage: ${massage}`);
  };

  return (
    <div className="bgContact">
      <div className="containerContact" id="contact">
        <form onSubmit={onSubmit} className="contentContact">
          <div className="titleContact">
            <h1>Contact</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
          <div className="inputContact">
            <ui className="text-l">
              <li>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <input
                  required
                  type="text"
                  placeholder="Your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <input
                  required
                  type="text"
                  placeholder="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </li>
            </ui>
            <div className="text-r">
              <textarea
                required
                placeholder="Your message"
                value={massage}
                onChange={(e) => setMassage(e.target.value)}
              />
            </div>
          </div>
          <div className="btn-contact button">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
