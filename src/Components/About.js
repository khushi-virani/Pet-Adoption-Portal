import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="container about-section">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6">
          <img src="images/aboutus.webp" alt="About Pets" />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <p className="section-subtitle">- About Us -</p>
          <h2 className="section-title">
            What Makes Us Care About Pets<span className="highlight-dot">.</span>
          </h2>
          <p className="text-muted">Our love for animals drives everything we do.</p>
          <p>
            We care about pets because we see their unique personalities, the joy they bring,
            and their unwavering loyalty. Every animal deserves a chance to live a happy,
            healthy life, surrounded by love. Our mission is to rescue, protect, and find
            forever homes for these animals, giving them the second chance they truly deserve.
          </p>

          {/* Accordion */}
          <div className="accordion" id="aboutAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Commitment to Compassion
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#aboutAccordion"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  We ensure every animal receives the love and care they deserve while waiting
                  for a forever home.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Focus on Health and Happiness
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#aboutAccordion"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  We provide proper nutrition, medical care, and safe spaces to ensure pets thrive.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Building Loving Connections
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#aboutAccordion"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  We connect families with pets to create lifelong bonds filled with love and joy.
                </div>
              </div>
            </div>
          </div>
          {/* End accordion */}
        </div>
      </div>
    </div>
  );
};

export default About;