import React from "react";

import "./ideas.css";

export default class ResourcePage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="w3-container">
            <h1 className="article-title">
              Feeling Stuck in a Creative Dead Zone?
              <h2> here are 5 projects ideas
              you can try.</h2>
            </h1>
        
            <div className="article-body"></div>

            {/* sites to help with coding errors, etc */}

            <div className="w3-teal">
              <p>
                <h1>React Pokemon App using PokeAPI</h1>
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Pokemon-550x550.jpeg"
                  alt=""
                  className="project__img"
                />
                You can make a very simple and fun React project using PokeAPI.
                Here you can fetch the Pokemon details or their characteristics
                through this API and you can make a fun project using this.
                <a
                  className="btn"
                  href="https://github.com/Megh2507/Pokemon-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Source Code</button>
                </a>
              </p>
            </div>

            <div>
              <p>
                <h1>React Cryptocurrency Application</h1>
                There are many free API available, using one of those API, you
                can get the crypto price details and everything in JSON. You can
                also implement a search bar where users can search coins by
                providing the coin names
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/1-2-380x386.png"
                  alt=""
                  className="project__img"
                />
                <a
                  className="btn"
                  href="https://mdn.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Source Code</button>
                </a>
              </p>
            </div>

            <div>
              <p>
                <h1>React Password Generator</h1>
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Password-Generator-380x358.png"
                  alt=""
                  className="project__img"
                />
                you can create a password generator where you can create your
                strong passwords and can copy them to your clipboard. Users can
                select what to include in their passwords like small letters,
                capital letters, special characters, numbers, etc.
                <a
                  className="btn"
                  href="https://github.com/Megh2507/react_password_generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Source Code</button>
                </a>
              </p>
            </div>

            <div>
              <p>
                <h1>Photo Gallery Application:</h1>
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/5-2-550x651.png"
                  alt=""
                  className="project__img"
                />
                We can build an intermediate-level React project by creating a
                photo gallery Application.This project is a good
                intermediate-level full-stack project using React and Node. This
                application will be a great example of connecting with the
                third-party API.
                <a
                  className="btn"
                  href="https://github.com/chrisblakely01/react-node-photo-gallery"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Source Code</button>
                </a>
              </p>
            </div>

            {/* resource pages to help w/ coding */}

            <div>
              <p>
                <h1>E-Commerce Application</h1>
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/E-Commerce-Website-380x364.png"
                  alt=""
                  className="project__img"
                />
                We all love shopping via online E-Commerce applications. You can
                also create your full-stack E-commerce application using
                MERN(MongoDB, Express, React, and Node) stack which can be
                considered as a great advanced level React Project
                <a
                  className="btn"
                  href="https://github.com/meabhisingh/mernProjectEcommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Source Code</button>
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
