import React from "react";

import "./resources.css";

export default class ResourcePage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="w3-container">
            <h1 className="article-title">Coding Resources</h1>
            <div className="article-body"></div>

            {/* sites to help with coding errors, etc */}

            <div className="w3-teal">
              <p>
                Stack Overflow- Question and Answer Website for Professional and
                Enthusiast Programmers!
                <a className="btn"
                  href="https://stackoverflow.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
              </p>
            </div>
            <p>
              MDN Web Docs- Documentation Repository and Learning Resource for
              Web Developers.
              <a className="btn"
                  href="https://mdn.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>

            <p>
              Code Project- Community for Computer Programmers w/ Articles on
              Different Topics and Programming Languages.
        
              <a className="btn"
                  href="https://www.codeproject.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>


            </p>
            <p>
              Code Ranch- Discussions on Java, Databases, Programmer
              Certification, Programming Jobs and More.
   
              <a  className="btn"
                  href="https://coderanch.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>

            {/* resource pages to help w/ coding */}
            <p>
              CodeAcademy- Online Interactive Platform offering Free Coding
              Classes
             
              <a  className="btn"
                  href="https://www.codecademy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
            <p>
              GeeksforGeeks- Tutorial Coding Site including Quizzes and
              Algorithm
        
              <a  className="btn"
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
            <p>
              W3Schools- Freemium Educational Website for Learning Coding Online
            
              <a  className="btn"
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
            {/* front end websites to help design your page */}
            <p>
              CodePen- Build, Test, and Discover Front End Code
           
              <a  className="btn"
                  href="https://codepen.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
            <p>
              Coolors- Color Palattes Generator
           
              <a  className="btn"
                  href="https://coolors.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
            <p>
              FontSpace- 93,000+ Free Fonts
       
              <a  className="btn"
                  href="https://www.fontspace.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">view More</button>
                </a>
            </p>
          </article>
        </div>
      </div>
    );
  }
}
