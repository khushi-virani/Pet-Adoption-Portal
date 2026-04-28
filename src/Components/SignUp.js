// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// export default function Signup({ onSubmit }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirm) {
//       alert("Passwords do not match!");
//       return;
//     }
//     if (onSubmit) onSubmit(formData);
//     console.log("Signup:", formData);
//   };

//   const EyeIcon = (
//     <svg width="18" height="12" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
//     </svg>
//   );

//   const EyeSlashIcon = (
//     <svg width="18" height="14" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6 0-10-7-10-7a19.1 19.1 0 0 1 4.1-4.9"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M1 1l22 22"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M9.88 9.88A3 3 0 0 0 14.12 14.12"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   return (
//     <div className="petzee-signup">
//       <div className="petzee-signup__container">
//         {/* LEFT: form */}
//         <div className="left signup-card">
//           <div className="brand-row">
//             <div className="logo-placeholder">🐾</div>
//             <div className="brand-text">
//               <div className="brand-name">Petzee</div>
//               <div className="brand-sub">JOIN THE FAMILY</div>
//             </div>
//           </div>

//           <h1 className="signup-title">Create Account</h1>
//           <p className="signup-subtitle">
//             Sign up to start your pet adoption journey.
//           </p>

//           <form className="signup-form" onSubmit={handleSubmit} noValidate>
//             <label className="input-label" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               className="text-input"
//               type="text"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <label className="input-label" htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               className="text-input"
//               type="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <label className="input-label" htmlFor="password">
//               Password
//             </label>
//             <div className="password-field">
//               <input
//                 id="password"
//                 name="password"
//                 className="text-input"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="button"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//                 className="toggle-password"
//                 onClick={() => setShowPassword((s) => !s)}
//               >
//                 <span className="icon">
//                   {showPassword ? EyeSlashIcon : EyeIcon}
//                 </span>
//               </button>
//             </div>

//             <label className="input-label" htmlFor="confirm">
//               Confirm Password
//             </label>
//             <div className="password-field">
//               <input
//                 id="confirm"
//                 name="confirm"
//                 className="text-input"
//                 type={showConfirm ? "text" : "password"}
//                 placeholder="Re-enter password"
//                 value={formData.confirm}
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="button"
//                 aria-label={showConfirm ? "Hide password" : "Show password"}
//                 className="toggle-password"
//                 onClick={() => setShowConfirm((s) => !s)}
//               >
//                 <span className="icon">
//                   {showConfirm ? EyeSlashIcon : EyeIcon}
//                 </span>
//               </button>
//             </div>

//             <button type="submit" className="signup-button">
//               Sign Up
//             </button>
//           </form>

//           <p className="login-link">
//             Already have an account? <Link to="/Login">Login here</Link>
//           </p>
//         </div>

//         {/* RIGHT: fun pet emojis */}
//         <div className="right pet-animation-container" aria-hidden>
//           <div className="pet-emoji cat">🐱</div>
//           <div className="pet-emoji dog">🐶</div>
//         </div>
//       </div>
//     </div>
//   );
// }
// SignUp.js (replace your current component)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirm) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/signup.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }),
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("Signup successful! Please login.");
      // Redirect to login page
      window.location.href = "/Login";
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (err) {
    console.error(err);
    alert("Signup request failed");
  }
};


  // ... rest of your UI (same as original) - unchanged
  return (
    <div className="petzee-signup">
      <div className="petzee-signup__container">
        <div className="left signup-card">
          <div className="brand-row">
            <div className="logo-placeholder">🐾</div>
            <div className="brand-text"><div className="brand-name">Petzee</div><div className="brand-sub">JOIN THE FAMILY</div></div>
          </div>

          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Sign up to start your pet adoption journey.</p>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <label className="input-label" htmlFor="name">Full Name</label>
            <input id="name" name="name" className="text-input" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />

            <label className="input-label" htmlFor="email">Email</label>
            <input id="email" name="email" className="text-input" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required/>

            <label className="input-label" htmlFor="password">Password</label>
            <div className="password-field">
              <input id="password" name="password" className="text-input" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
              <button type="button" className="toggle-password" onClick={() => setShowPassword(s => !s)} aria-label="Toggle password">
                <span className="icon">{showPassword ? "Hide" : "Show"}</span>
              </button>
            </div>

            <label className="input-label" htmlFor="confirm">Confirm Password</label>
            <div className="password-field">
              <input id="confirm" name="confirm" className="text-input" type={showConfirm ? "text" : "password"} placeholder="Re-enter password" value={formData.confirm} onChange={handleChange} required />
              <button type="button" className="toggle-password" onClick={() => setShowConfirm(s => !s)} aria-label="Toggle confirm">
                <span className="icon">{showConfirm ? "Hide" : "Show"}</span>
              </button>
            </div>

            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <p className="login-link">Already have an account? <Link to="/Login">Login here</Link></p>
        </div>

        <div className="right pet-animation-container" aria-hidden>
          <div className="pet-emoji cat">🐱</div>
          <div className="pet-emoji dog">🐶</div>
        </div>
      </div>
    </div>
  );
}
