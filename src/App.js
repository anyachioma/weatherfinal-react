import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by{" "}
          <a
            href="https//www.linkedin.com/in/mfonobong-nnamseh-46529272"
            target="blank"
            rel="noopener noreferrer"
          >
            Anya Chioma{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/anyachioma/weatherfinal-react.git"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and is{" "}
          <a
            href="https://spectacular-gumdrop-37e5e3.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
