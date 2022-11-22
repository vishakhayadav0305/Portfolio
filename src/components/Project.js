import React from "react";
import Card from "react-bootstrap/Card";
import pic from "../images/proj1.png";
import pic1 from "../images/proj2.png";
import pic2 from "../images/proj3.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-class bg-dark mt-5 mb-5" id="Project">
      <h3 className="text-light mt-5">My Projects</h3>
      <p className="text-light text-align-center">
        (This portfolio is built using React JS and Bootstrap)
      </p>
      <div className="d-flex justify-content-center align-items-center mt-5 project-resp">
        <div className="mx-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
              <Card.Title>Website for Educational Institute</Card.Title>
              <Card.Text>
                Built using HTML + CSS +JavaScript -It is a web page for an
                educational institution. It is an interactive and responsive web
                page.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <button type="button" class="btn btn-info">
                  <a
                    href="https://vishakhayadav030502ydv.on.drv.tw/www.iEducate.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                    className="mx-2"
                  >
                    <i class="fa-solid fa-eye"></i>
                    View
                  </a>
                </button>
                <button type="button" class="btn btn-info">
                  <a
                    href="https://github.com/vishakhayadav0305/iEducate"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                    className="mx-2"
                  >
                    <i class="fa-brands fa-github-alt"></i>
                    Source
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic1} />
            <Card.Body>
              <Card.Title>Image Gallery</Card.Title>
              <Card.Text>
                Built using ReactJS + Tailwind CSS -It has a search component
                where user can search for images using meaningful keywords.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <button type="button" class="btn btn-info">
                  <a
                    href="https://vishakhayadav0305.github.io/Img-Gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                    className="mx-2"
                  >
                    <i class="fa-solid fa-eye"></i>
                    View
                  </a>
                </button>
                <button type="button" class="btn btn-info">
                  <a
                    href="https://github.com/vishakhayadav0305/Img-Gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                    className="mx-2"
                  >
                    <i class="fa-brands fa-github-alt"></i>
                    Source
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Car Parking</Card.Title>
              <Card.Text>
                Built using React hooks. USer can add and delete driver's info
                and on clicking the submit button the info will show in a table
                along with the check in time
              </Card.Text>
              <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-info">
                  <a
                    href="https://majestic-muffin-4f23fb.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                    className="mx-2"
                  >
                    <i class="fa-solid fa-eye"></i>
                    View
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <p className="text-light mt-5">
        For more projects:{" "}
        <a
          href="http://github.com/vishakhayadav0305"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github text-light"></i>
        </a>
      </p>
    </div>
  );
};

export default Project;
