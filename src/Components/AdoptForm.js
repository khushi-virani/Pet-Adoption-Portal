import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import * as bootstrap from "bootstrap";

const API = process.env.REACT_APP_API_URL || "http://localhost/php-backend"; // adjust path if needed

const AdoptForm = () => {
  const formRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ✅ Progress bar logic (unchanged)
  const fields = useMemo(() => {
    if (!formRef.current) return [];
    return Array.from(formRef.current.querySelectorAll("input, select, textarea"));
  }, [formRef.current]);

  const updateProgress = () => {
    if (!progressRef.current || !formRef.current) return;
    const inputs = Array.from(formRef.current.querySelectorAll("input, select, textarea"));
    const filled = inputs.filter((f) => {
      if (f.type === "checkbox" || f.type === "radio") return f.checked;
      if (f.type === "file") return f.files && f.files.length > 0;
      return f.value && f.value.trim().length > 0;
    }).length;
    const pct = Math.round((filled / inputs.length) * 100);
    progressRef.current.style.width = Math.min(pct, 100) + "%";
  };

  useEffect(() => {
    const inputs = fields;
    inputs.forEach((el) => {
      ["input", "change", "blur"].forEach((ev) => el.addEventListener(ev, updateProgress));
    });
    updateProgress();
    return () => {
      inputs.forEach((el) => {
        ["input", "change", "blur"].forEach((ev) => el.removeEventListener(ev, updateProgress));
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formRef.current]);

  // ✅ Scroll animations (unchanged)
  useEffect(() => {
    if (!containerRef.current) return;
    const revealEls = containerRef.current.querySelectorAll(".reveal-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ✅ UPDATED: Actual submission to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setWasValidated(true);

    if (!form.checkValidity()) {
      return; // let Bootstrap show validation messages
    }

    // Collect only required fields for backend
    const formData = {
  first_name: form.firstName.value,
  last_name: form.lastName.value,
  email: form.email.value,
  phone: form.phone.value,
  address: form.address.value,
  pet_type: form.petType.value,
  pet_name: form.petName.value, // ✅ Added
  age_range: form.ageRange.value,
  gender: form.gender.value,
  housing: form.housing.value,
  adults: form.adults.value,
  children: form.children.value,
  allergies: form.allergies.value,
  experience: form.experience.value,
  agree: form.agree.checked ? 1 : 0,
};


    try {
      setSubmitting(true);
      const response = await fetch(`${API}/submit_request.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setSubmitting(false);

      if (data.status === 1) {
        // Success Toast
        const toast = document.createElement("div");
        toast.className =
          "toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3";
        toast.setAttribute("role", "status");
        toast.innerHTML = `
          <div class="d-flex">
            <div class="toast-body">
              <i class="bi bi-check-circle-fill me-1"></i>
              ${data.message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>`;
        document.body.appendChild(toast);
        const toastObj = new bootstrap.Toast(toast, { delay: 3000 });
        toastObj.show();
        toast.addEventListener("hidden.bs.toast", () => toast.remove());

        form.reset();
        setWasValidated(false);
        updateProgress();
      } else {
        alert(data.message || "Failed to submit request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="page-wrap" ref={containerRef}>
      <div className="card form-card">
        {/* --- Header --- */}
        <div className="card-header">
          <div className="d-flex align-items-center gap-3">
            <div className="brand-chip">
              <i className="bi bi-suit-heart-fill"></i> Adopt • Foster • Love
            </div>
            <div className="ms-1">
              <h1 className="h4 mb-1">Pet Adoption Application</h1>
              <p className="mb-0 text">
                Complete the form below — we’ll respond within 3–5 business days.
              </p>
            </div>
          </div>
          <div className="mt-3 progress-soft">
            <div className="bar" id="progressBar" ref={progressRef}></div>
          </div>
        </div>

        {/* --- Form Body (UNCHANGED) --- */}
        <div className="card-body p-4 p-md-5">
          <div
            className="alert alert-info d-flex align-items-center reveal-on-scroll"
            role="alert"
          >
            <i className="bi bi-info-circle me-2"></i>
            <div>
              Fields marked with <strong>*</strong> are required. Your
              information stays private.
            </div>
          </div>

          {/* Your full form stays the same */}
          <form
            className={`needs-validation ${wasValidated ? "was-validated" : ""}`}
            id="adoptionForm"
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
          >
            {/* ✅ keep all your input fields as they are */}
            {/* ✅ do NOT remove any fields */}
            {/* ✅ this will work perfectly with the backend */}
            {/* Applicant Details */}
            <div className="fieldset reveal-on-scroll">
              <div className="section-title">
                <i className="bi bi-person-fill"></i> Applicant Details
              </div>
              <div className="divider"></div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your first name.
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your last name.
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    inputMode="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Enter a valid email address.
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    inputMode="tel"
                    pattern="[0-9+]{7,15}"
                    required
                  />
                  <div className="invalid-feedback">
                    Enter a valid phone number.
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label required" htmlFor="address">
                    Address
                  </label>
                  <input type="text" className="form-control" id="address" required />
                  <div className="invalid-feedback">Please enter your address.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input type="text" className="form-control" id="city" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" htmlFor="state">
                    State/Region
                  </label>
                  <input type="text" className="form-control" id="state" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" htmlFor="zip">
                    ZIP/Postal Code
                  </label>
                  <input type="text" className="form-control" id="zip" />
                </div>
              </div>
            </div>

            {/* Pet Preferences */}
            <div className="fieldset reveal-on-scroll">
              <div className="section-title">
                <i className="bi bi-paw-fill"></i> Pet Preferences
              </div>
              <div className="divider"></div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="petType">
                    Type
                  </label>
                  <select id="petType" className="form-select" required>
                    <option value="" disabled defaultValue="">
                      Choose...
                    </option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Bunny</option>
                  </select>
                  <div className="invalid-feedback">Please choose a pet type.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="petName">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="petName"
                    placeholder="Enter the pet's name you want to adopt"
                    required
                  />
                  <div className="invalid-feedback">Please enter the pet name.</div>
              </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="breed">
                    Preferred Breed
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="breed"
                    placeholder="Optional"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="ageRange">
                    Age Range
                  </label>
                  <select id="ageRange" className="form-select" required>
                    <option value="" disabled defaultValue="">
                      Choose...
                    </option>
                    <option>Puppy/Kitten</option>
                    <option>Young</option>
                    <option>Adult</option>
                    <option>Senior</option>
                    <option>No preference</option>
                  </select>
                  <div className="invalid-feedback">Please choose an age range.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="gender">
                    Gender
                  </label>
                  <select id="gender" className="form-select" required>
                    <option value="" disabled defaultValue="">
                      Choose...
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>No preference</option>
                  </select>
                  <div className="invalid-feedback">
                    Please choose a gender preference.
                  </div>
                </div>
              </div>
            </div>

            {/* Household & Lifestyle */}
            <div className="fieldset reveal-on-scroll">
              <div className="section-title">
                <i className="bi bi-house-heart-fill"></i> Household & Lifestyle
              </div>
              <div className="divider"></div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="housing">
                    Housing Type
                  </label>
                  <select id="housing" className="form-select" required>
                    <option value="" disabled defaultValue="">
                      Choose...
                    </option>
                    <option>Apartment</option>
                    <option>House (with yard)</option>
                    <option>House (no yard)</option>
                    <option>Farm/Rural</option>
                  </select>
                  <div className="invalid-feedback">Please select housing type.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="adults">
                    Number of Adults
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="adults"
                    min="1"
                    step="1"
                    required
                  />
                  <div className="invalid-feedback">Enter number of adults.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="children">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="children"
                    min="0"
                    step="1"
                    required
                  />
                  <div className="invalid-feedback">Enter number of children.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="allergies">
                    Any allergies to pets?
                  </label>
                  <select id="allergies" className="form-select" required>
                    <option value="" disabled defaultValue="">
                      Choose...
                    </option>
                    <option>No</option>
                    <option>Yes — mild</option>
                    <option>Yes — severe</option>
                    <option>Unsure</option>
                  </select>
                  <div className="invalid-feedback">Please select an option.</div>
                </div>
                <div className="col-12">
                  <label className="form-label required" htmlFor="experience">
                    Pet Care Experience
                  </label>
                  <textarea
                    id="experience"
                    className="form-control"
                    rows="3"
                    required
                    placeholder="Tell us about pets you've owned/cared for, training experience, etc."
                  ></textarea>
                  <div className="invalid-feedback">
                    Please add a short description.
                  </div>
                </div>
              </div>
            </div>

            {/* Current Pets */}
            <div className="fieldset reveal-on-scroll">
              <div className="section-title">
                <i className="bi bi-clipboard-heart-fill"></i> Current Pets (if any)
              </div>
              <div className="divider"></div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="currentPets">
                    Number of Current Pets
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="currentPets"
                    min="0"
                    step="1"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="vetName">
                    Veterinarian/Clinic
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="vetName"
                    placeholder="Optional"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="petNotes">
                    Notes
                  </label>
                  <textarea
                    id="petNotes"
                    className="form-control"
                    rows="2"
                    placeholder="Species, ages, temperament, vaccination status, etc."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Uploads */}
            <div className="fieldset reveal-on-scroll">
              <div className="section-title">
                <i className="bi bi-camera-fill"></i> Optional Uploads
              </div>
              <div className="divider"></div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="idProof">
                    ID Proof (image/PDF)
                  </label>
                  <div className="upload-box">
                    <input
                      className="form-control"
                      type="file"
                      id="idProof"
                      accept=".png,.jpg,.jpeg,.pdf"
                    />
                    <small className="text-secondary d-block mt-2">
                      Max 5MB.
                    </small>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="homePhoto">
                    Home/Yard Photo (image)
                  </label>
                  <div className="upload-box">
                    <input
                      className="form-control"
                      type="file"
                      id="homePhoto"
                      accept=".png,.jpg,.jpeg"
                    />
                    <small className="text-secondary d-block mt-2">
                      Helps us assess suitability.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="form-check mb-3 reveal-on-scroll">
              <input
                className="form-check-input"
                type="checkbox"
                id="agree"
                required
              />
              <label className="form-check-label" htmlFor="agree">
                I confirm that the information provided is accurate and I agree
                to the adoption terms.
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            {/* Footer Button (same as before) */}
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-stretch align-items-sm-center">
              <small className="text-secondary">
                By submitting, you consent to being contacted about your application.
              </small>

              <button
                type="submit"
                className="btn btn-adopt btn-pill"
                id="submitBtn"
                disabled={submitting}
              >
                <span className={`btn-text ${submitting ? "d-none" : ""}`}>
                  <i className="bi bi-send-fill me-1"></i> Submit Application
                </span>

                <span className={`btn-loading ${submitting ? "" : "d-none"}`}>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending…
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdoptForm;
