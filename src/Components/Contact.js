import "./style.css";
function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="text-center contact-header mb-5">
          <img
            src="https://img.icons8.com/color/48/dog-paw-print.png"
            alt="Paw Icon"
          />
          <p className="text-warning fw-bold mt-2 mb-1">CONTACTS</p>
          <h2>Let's Get In Touch.</h2>
          <p className="mt-2 mb-0">
            Whether you’re interested in adopting, donating, or simply want to
            learn more, don’t hesitate to reach out!
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Map */}
          <div className="col-md-6">
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086591383104!2d-122.41941568468196!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d1d5d2a07%3A0x80f0c0e8c2d3e0e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your full name*"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number*"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail*"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Type your message*"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;