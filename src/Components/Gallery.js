import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


const Gallery = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [activeTab, setActiveTab] = useState("Dog");

  // Fetch pets from backend
  useEffect(() => {
    fetch(`${API}/get_pets.php`)
      // .then((res) => res.json())
       .then(res => {
      console.log("Status:", res.status);
      return res.json();
    })
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);



  const handleAdoptClick = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("You must be logged in to adopt a pet!");
      navigate("/Login", { state: { from: "/AdoptForm" } });
      return;
    }
    navigate("/AdoptForm");
  };

  // Filter by category
  const filteredPets = pets.filter(
    (pet) => pet.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="container my-5">
      <div className="section-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Paw Icon"
        />
        <div className="text-warning small fw-bold">– ADOPT NOW –</div>
        <h2>Every Animal Deserves a Loving Home<span>.</span></h2>
        <p>
          Adoption is a lifelong promise of love and care — open your heart and
          give a homeless pet a forever home.
        </p>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs" role="tablist">
        {["Dog", "Cat", "Bunny"].map((key) => (
          <li className="nav-item" key={key}>
            <button
              className={`nav-link ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {key}s
            </button>
          </li>
        ))}
      </ul>

      {/* Pet Cards */}
      <div className="row g-4 mt-4">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="col-md-4" key={pet.pet_id}>
              <div className="card pet-card">
                <img src={pet.image} alt={pet.pet_name} />
                <div className="card-body text-center">
                  <div className="pet-title">{pet.pet_name}</div>
                  <div className="divider"></div>
                  <p className="pet-info">{pet.age} · {pet.breed}</p>
                  <p className="text-muted">{pet.description}</p>
                  <button className="btn btn-adopt mt-2" onClick={handleAdoptClick}>
                    Adopt Me
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-3">No pets available.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
