import { Link } from "react-router-dom";
import "./style.css";

const AdoptionSuccess=()=> {
  return (
    <div className="success-body">
      <div className="thank-card">
        <i className="fa-solid fa-circle-check"></i>
        <h2>Thank You!</h2>
        <p>
          Your adoption request has been submitted successfully. <br />
          We’ll review your application and contact you soon with the next steps.
        </p>
        <Link to="/Home" className="btn-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default AdoptionSuccess;