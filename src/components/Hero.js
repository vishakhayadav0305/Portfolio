import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="background d-flex justify-content-center align-items-center"
      id="/"
    >
      <div className="mx-5">
        <h5 className="text-light">
          <strong>Hi, I am Vishakha Yadav.</strong>
        </h5>
        <h1 className="text-light display-4">
          <strong>FRONTEND DEVELOPER</strong>
        </h1>
        <div>
          <button type="button" class="btn btn-info mx-3 mt-2">
            <a
              href="https://drive.google.com/file/d/14xF5zqJ2i3T0UzUNNR22Txw4Lz8qJK_K/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <strong>MY RESUME</strong>
            </a>
          </button>
        </div>
        <div className="mt-5">
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
      </div>
    </div>
  );
};

export default Hero;
