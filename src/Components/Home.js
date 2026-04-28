import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./style.css";

const Home = () => {
  useEffect(() => {
    // No-op: importing bootstrap bundle initializes data-api behaviors
  }, []);

  return (
    <div className="petzee-page">
      {/* ================= Hero ================= */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 hero-content">
              <p
                className="text-uppercase small mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                - Love Awaits Here -
              </p>
              <h1>
                Give a Paw,
                <br /> Save a Life!
              </h1>
              <p>Bringing warmth and companionship into every home.</p>
              <a href="/Gallery" className="btn btn-light hero-btn">
                Adopt Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Team ================= */}
      <section className="container py-5">
        {/* Header */}
        <div className="team-header text-center mb-5">
          <img
            src="https://img.icons8.com/emoji/48/paw-prints.png"
            alt="Paw Icon"
          />
          <div className="eyebrow">OUR TEAM</div>
          <h2 className="fw-bold mt-2">Loyal, Passionate, and Driven.</h2>
          <p className="text-secondary">
            Our team is made up of dedicated individuals who share a common love
            for animals.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {/* Emma Johnson */}
          <div className="col-12 col-lg-6">
            <div className="profile-card">
              <div className="row g-0">
                <div className="col-md-6 img-col img-left">
                  <img src="/images/e1.webp" alt="Emma Johnson" />
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <h5>Emma Johnson</h5>
                    <div className="role">Founder</div>
                    <p className="desc">
                      Emma leads our team with a passion for animal welfare and
                      years of experience.
                    </p>
                    <div className="social">
                      <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <i className="bi bi-youtube" />
                      </a>
                      <a href="#" aria-label="Twitter/X">
                        <i className="bi bi-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* David Smith */}
          <div className="col-12 col-lg-6">
            <div className="profile-card">
              <div className="row g-0 flex-md-row-reverse">
                <div className="col-md-6 img-col img-right">
                  <img src="/images/e2.webp" alt="David Smith" />
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <h5>David Smith</h5>
                    <div className="role">Veterinary Specialist</div>
                    <p className="desc">
                      David provides expert medical care to ensure the health
                      and well-being of our animals.
                    </p>
                    <div className="social">
                      <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <i className="bi bi-youtube" />
                      </a>
                      <a href="#" aria-label="Twitter/X">
                        <i className="bi bi-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sophia Lee */}
          <div className="col-12 col-lg-6">
            <div className="profile-card">
              <div className="row g-0">
                <div className="col-md-6 img-col img-left ">
                  <img src="/images/e3.webp" alt="Sophia Lee"  style={{ height: 500, objectFit: "cover" }} />
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <h5>Sophia Lee</h5>
                    <div className="role">Adoption Coordinator</div>
                    <p className="desc">
                      Sophia helps connect animals with loving families through
                      her dedication and care.
                    </p>
                    <div className="social">
                      <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <i className="bi bi-youtube" />
                      </a>
                      <a href="#" aria-label="Twitter/X">
                        <i className="bi bi-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emma Brown */}
          <div className="col-12 col-lg-6">
            <div className="profile-card">
              <div className="row g-0 flex-md-row-reverse">
                <div className="col-md-6 img-col img-right">
                  <img
                    src="/images/e4.webp"
                    alt="Emma Brown"
                    style={{ height: 500, objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <h5>Emma Brown</h5>
                    <div className="role">Volunteer Manager</div>
                    <p className="desc">
                      Emma manages our volunteers, ensuring they have the
                      support needed to make a difference.
                    </p>
                    <div className="social">
                      <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <i className="bi bi-youtube" />
                      </a>
                      <a href="#" aria-label="Twitter/X">
                        <i className="bi bi-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Lend a Paw CTA ================= */}
      <section className="lend-paw-section">
        <div className="container lend-paw-inner">
          <div className="row align-items-center w-100">
            {/* Left content */}
            <div className="col-lg-6 lend-copy">
              <h2>
                Lend a Paw, Change a Life<span className="dot">.</span>
              </h2>
              <p className="lead">
                Join us in making a difference today. Your support helps rescue
                animals, provide care, and give them the chance to find loving
                homes.
              </p>

              <h5>How You Can Help:</h5>
              <ul className="lend-list">
                <li>
                  <strong>Adopt a Pet</strong> – Open your heart and home to a
                  pet in need.
                </li>
                <li>
                  <strong>Donate</strong> – Your donation directly funds
                  veterinary care, food, and shelter.
                </li>
                <li>
                  <strong>Volunteer</strong> – Give your time to make a
                  meaningful impact.
                </li>
              </ul>
              <a href="/Contact" className="text-decoration-none">
                <button className="btn btn-pill mt-3">Contact Us</button>
              </a>
            </div>

            {/* Right image */}
            <div className="col-lg-6 dog-wrap h-100 text-center text-lg-end">
              <img src="/images/contact us.png" alt="Happy Dog" className="dog-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="section-wrap">
        <div className="container">
          <div className="text-center mb-4">
            <div className="paw mb-3">🐾</div>
            <div className="eyebrow">Success Stories</div>
            <h2 className="title display-6 mt-1">
              Loyal Hearts, Forever Homes<span className="dot-accent" />
            </h2>
            <p className="lead lead-muted mt-2">
              Read the heartwarming stories of those who gave a second chance to
              animals in need.
            </p>
          </div>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="false"
            data-bs-touch="true"
          >
            <div className="carousel-inner t-card">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="avatar-wrap">
                  <img
                    src="/images/t1.webp"
                    className="w-100 h-100 object-fit-cover"
                    alt="John & Sarah"
                  />
                </div>
                <h5 className="t-name">John &amp; Sarah Davis</h5>
                <div className="t-meta">
                  Pet Adopted: <strong>Max</strong> (Dog)
                </div>
                <p className="t-quote">
                  “Adopting Max was the best decision we ever made! He’s brought
                  so much joy into our lives, and we can’t imagine our home
                  without him. Max was shy at first, but with patience and love,
                  he’s opened up and become the most loyal and loving dog. He
                  greets us every day with excitement and tail wags, and we feel
                  so lucky to have him.”
                </p>
                <a className="t-date d-inline-block" href="#" aria-label="Published date">
                  December 15, 2024
                </a>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="avatar-wrap">
                  <img
                    src="/images/t2.webp"
                    className="w-100 h-100 object-fit-cover"
                    alt="Mark Johnson"
                  />
                </div>
                <h5 className="t-name">Mark Johnson</h5>
                <div className="t-meta">
                  Pet Adopted: <strong>Snowball</strong> (Rabbit)
                </div>
                <p className="t-quote">
                  “Snowball has truly changed our lives. From the first day we
                  brought him home, he’s filled our hearts with so much love.
                  He’s not just a rabbit, he’s a playful companion who loves
                  attention and affection. Watching him hop around and explore
                  our home has been such a joy, and he’s always eager to
                  interact with us.”
                </p>
                <a className="t-date d-inline-block" href="#">
                  June 24, 2024
                </a>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="avatar-wrap">
                  <img
                    src="/images/t3.webp"
                    className="w-100 h-100 object-fit-cover"
                    alt="Alicia Gomez"
                  />
                </div>
                <h5 className="t-name">Alicia Gomez</h5>
                <div className="t-meta">
                  Pet Adopted: <strong>Luna</strong> (Cat)
                </div>
                <p className="t-quote">
                  “Luna chose us the moment we walked in. She’s gentle, curious,
                  and has brought a calm energy to our home. Our favorite time is
                  evenings when she curls up beside us and purrs herself to
                  sleep.”
                </p>
                <a className="t-date d-inline-block" href="#">
                  March 02, 2024
                </a>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              aria-label="Previous"
            >
              <span className="icon" aria-hidden="true">
                ‹
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              aria-label="Next"
            >
              <span className="icon" aria-hidden="true">
                ›
              </span>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators position-static mt-4">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Stats ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="Volunteers"
                />
                <div>
                  <div className="stat-number">60 +</div>
                  <div className="stat-label">Dedicated Volunteers</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Donations"
                />
                <div>
                  <div className="stat-number">4.2K</div>
                  <div className="stat-label">Donations Received</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png"
                  alt="Adoptions"
                />
                <div>
                  <div className="stat-number">540 +</div>
                  <div className="stat-label">Successful Adoptions</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2950/2950714.png"
                  alt="Checkups"
                />
                <div>
                  <div className="stat-number">800</div>
                  <div className="stat-label">Veterinary Checkups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         </div>
  );
}
export default Home;