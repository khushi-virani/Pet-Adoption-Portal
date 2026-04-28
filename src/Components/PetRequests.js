import React, { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

const PetRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`${API}/view_request.php`)
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h2>📝 Pet Adoption Requests</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Pet Type</th>
            <th>Age Range</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map(req => (
              <tr key={req.request_id}>
                <td>{req.request_id}</td>
                <td>{req.first_name} {req.last_name}</td>
                <td>{req.email}</td>
                <td>{req.phone}</td>
                <td>{req.pet_type}</td>
                <td>{req.age_range}</td>
                <td>{req.gender}</td>
                <td>{req.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No requests available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PetRequests;
