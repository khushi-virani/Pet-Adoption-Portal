import React, { useEffect, useState } from "react";
import "./style.css";

// const API_URL = "http://localhost/pet_backend"; // change if your backend path differs
const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

const AdminPanel = () => {
  const [pets, setPets] = useState([]);
  const [formData, setFormData] = useState({
    pet_id: "",
    pet_name: "",
    category: "",
    age: "",
    breed: "",
    image: "",
    description: "",
  });
  const [editing, setEditing] = useState(false);

  // Fetch all pets
  const fetchPets = () => {
    fetch(`${API}/get_pets.php`)
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new pet
  const handleAddPet = (e) => {
    e.preventDefault();
    fetch(`${API}/add_pet.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchPets();
        setFormData({
          pet_id: "",
          pet_name: "",
          category: "",
          age: "",
          breed: "",
          image: "",
          description: "",
        });
      });
  };

  // Delete pet
  const handleDeletePet = (id) => {
    if (!window.confirm("Are you sure you want to delete this pet?")) return;
    fetch(`${API}/delete_pet.php`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pet_id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchPets();
      });
  };

  // Edit pet
  const handleEditPet = (pet) => {
    setFormData(pet);
    setEditing(true);
  };

  // Update pet
  const handleUpdatePet = (e) => {
    e.preventDefault();
    fetch(`${API}/update_pet.php`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setEditing(false);
        fetchPets();
        setFormData({
          pet_id: "",
          pet_name: "",
          category: "",
          age: "",
          breed: "",
          image: "",
          description: "",
        });
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning mb-4">🐾 Admin Panel — Manage Pets</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          className="btn btn-warning"
          onClick={() => window.location.href = "/PetRequests"} // React Router will handle this
        >
          📝 View Pet Requests
        </button>
      </div>

      {/* Pet Form */}
      <div className="card p-4 shadow-sm mb-5">
        <h5>{editing ? "✏️ Edit Pet" : "➕ Add New Pet"}</h5>
        <form onSubmit={editing ? handleUpdatePet : handleAddPet}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                name="pet_name"
                placeholder="Pet Name"
                className="form-control"
                value={formData.pet_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <select
                name="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bunny">Bunny</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="age"
                placeholder="Age (e.g. 3 years)"
                className="form-control"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="breed"
                placeholder="Breed"
                className="form-control"
                value={formData.breed}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="image"
                placeholder="Image path (e.g. images/d1.jpeg)"
                className="form-control"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="description"
                placeholder="Description"
                className="form-control"
                rows="2"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-warning me-2">
              {editing ? "Update Pet" : "Add Pet"}
            </button>
            {editing && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setEditing(false);
                  setFormData({
                    pet_id: "",
                    pet_name: "",
                    category: "",
                    age: "",
                    breed: "",
                    image: "",
                    description: "",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Pets Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Age</th>
              <th>Breed</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="align-middle text-center">
            {pets.length > 0 ? (
              pets.map((pet) => (
                <tr key={pet.pet_id}>
                  <td>{pet.pet_id}</td>
                  <td>{pet.pet_name}</td>
                  <td>{pet.category}</td>
                  <td>{pet.age}</td>
                  <td>{pet.breed}</td>
                  <td>
                    <img
                      src={pet.image}
                      alt={pet.pet_name}
                      width="60"
                      height="60"
                      style={{ borderRadius: "8px" }}
                    />
                  </td>
                  <td>{pet.description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEditPet(pet)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeletePet(pet.pet_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-muted">
                  No pets available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
