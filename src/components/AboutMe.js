import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="background-about bg-dark mt-5 d-flex justify-content-center align-items-center"
      id="AboutMe"
    >
      <div>
        <h3 className="text-light mt-5">About Me</h3>
        <h6 className="text-light mt-3">
          Hello, My name is <strong>Vishakha Yadav</strong>.
          <div>
            <i class="fa-solid fa-location-pin"></i>
            <strong> Greater Noida, India</strong>
          </div>
          (open to relocate for a good opportunity)
          <div className="d-flex flex-column justify-content-start mt-3">
            <strong>About my educational background:</strong>
            <div>
              <i class="fa-solid fa-book mx-2"></i>
              10th- Ram-Eesh International School'17 - 10 CGPA
            </div>
            <div>
              <i class="fa-solid fa-book mt-2 mx-2"></i>
              12th- Ram-Eesh International School'19 - 92.4%
            </div>
            <div>
              <i class="fa-sharp fa-solid fa-graduation-cap mt-2 mx-2"></i>
              B.Sc(hons) Computer Science - Dyal Singh College, University of
              Delhi'22 - 7.7 CGPA
            </div>
          </div>
          {/* <table>
            <tr>
              <th>Class</th>
              <th>Passing Year</th>
              <th>School/College</th>
              <th>Grade</th>
            </tr>
            <tr>
              <td>10th</td>
              <td>2017</td>
              <td>Ram-Eesh International School</td>
              <td>10 CGPA</td>
            </tr>
            <tr>
              <td>12th</td>
              <td>2019</td>
              <td>Ram-Eesh International School</td>
              <td>92.4%</td>
            </tr>
            <tr>
              <td>B.Sc(hons)Computer Science</td>
              <td>2022</td>
              <td>Dyal Singh College, University of Delhi</td>
              <td>7.7 CGPA</td>
            </tr>
          </table> */}
        </h6>
      </div>
    </div>
  );
};

export default AboutMe;
