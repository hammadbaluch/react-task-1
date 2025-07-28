import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero-section container">
        <div className="hero-text">
          <h1 className="hero-heading">
            Awesome App <br />
            App Landing Template
          </h1>
          <p className="hero-para">
            An awesome landing page to showcase your app features sceenshots,
            <br /> pricing user testimonials and donload links
          </p>
          <ul className="hero-bullets">
            <li><i class="fa-regular fa-circle-check"></i>Amazing Design to Present Your App</li>
            <li><i class="fa-regular fa-circle-check"></i>Fully Responsive and Powered by Bootstrap & ProperKit</li>
            <li><i class="fa-regular fa-circle-check"></i>Very Easy to Customize and Setup</li>
          </ul>
          <button className="hero-btn">Start exploring</button>
        </div>
        <div className="hero-img">
          <img src="/mobile.png" alt="Mobile Image" />
        </div>
      </section>
    </>
  );
}
