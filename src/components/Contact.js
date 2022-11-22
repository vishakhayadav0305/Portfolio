import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="contact-class d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "450px" }}
      id="contact"
      width={"100vw"}
    >
      <div>
        <h3 className="text-light"> Contact Me</h3>
        <h5 className="text-light mt-5">Socials:</h5>
        <div>
          <a
            href="https://www.linkedin.com/in/vishakhayadav0305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin text-light mx-3 fa-2x"></i>
          </a>

          <a
            href="http://github.com/vishakhayadav0305"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github text-light mx-3 fa-2x"></i>
          </a>

          <a
            href="https://wa.me/+918527663981"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp text-light mx-3 fa-2x"></i>
          </a>
        </div>
        <div>
          <h5 className="text-light mt-5">
            Send your message here and I will contact you:
          </h5>
          <a
            href="https://forms.gle/YKLmTZ1oXnSTrR7F7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
