import React from "react";
import ContactMe from "../components/ContactMe";
import AboutMe from "../components/AboutMe";

export default function Contact() {
  return (
    <div>
      <h2>
        <AboutMe />
      </h2>
      <hr></hr>
      <br></br>
      <br></br>
      <h2>
        <ContactMe />
      </h2>
    </div>
  );
}
