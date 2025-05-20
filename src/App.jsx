import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Our Coctails</h1>

      <div className="coctails-list">
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
        <article className="coctail-item">
          <span>
            {" "}
            <img src="./cosmopolitan.jpg" className="coctail-img" />{" "}
          </span>
          <h5>Cosmopolitan</h5>
        </article>
      </div>
    </>
  );
}

export default App;
