
// // Login.js (replace your current component)
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

// export default function Login() {
 
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch(`${process.env.REACT_APP_API_URL}/login.php`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: email,
//         password: password
//       }),
//     });

//     const data = await res.json();

//     if (data.status === "success") {
      
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       alert(`Welcome ${data.user.name}`);
//        window.location.href="/Home"
//     } else {
//       alert(data.message || "Login failed");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Login request failed");
//   }
// };


//   return (
//     <div className="petzee-login">
//       <div className="petzee-login__container">
//         <div className="left login-card">
//           <div className="brand-row">
//             <div className="logo-placeholder">🐾</div>
//             <div className="brand-text"><div className="brand-name">Petzee</div><div className="brand-sub">LOVE AWAITS HERE</div></div>
//           </div>

//           <h1 className="login-title">Welcome Back!</h1>
//           <p className="login-subtitle">Find your new best friend.</p>

//           <form className="login-form" onSubmit={handleSubmit} noValidate>
//             <label className="input-label" htmlFor="email">Email</label>
//             <input id="email" className="text-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" required/>

//             <label className="input-label" htmlFor="password">Password</label>
//             <div className="password-field">
//               <input id="password" className="text-input" type={showPassword ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>
//               <button type="button" className="toggle-password" onClick={()=>setShowPassword(s=>!s)} aria-label="Toggle password">
//                 <span className="icon">{showPassword ? "Hide" : "Show"}</span>
//               </button>
//             </div>

//             <button type="submit" className="login-button">Login</button>
//           </form>

//           <p className="signup-link">Don't have an account? <Link to="/SignUp">Sign up here</Link></p>
//         </div>

//         <div className="right pet-animation-container" aria-hidden>
//           <div className="pet-emoji cat">🐱</div>
//           <div className="pet-emoji dog">🐶</div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdminLogin, setIsAdminLogin] = useState(false); // NEW

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.user));

        alert(`Welcome ${data.user.name}`);

        // Redirect based on user type or selected login
        if (data.user.utype === "admin" || isAdminLogin) {
          window.location.href="/AdminPanel" // Redirect admin to admin panel
        } else {
         window.location.href="/Home" // Redirect normal user
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login request failed");
    }
  };

  return (
    <div className="petzee-login">
      <div className="petzee-login__container">
        <div className="left login-card">
          <div className="brand-row">
            <div className="logo-placeholder">🐾</div>
            <div className="brand-text">
              <div className="brand-name">Petzee</div>
              <div className="brand-sub">LOVE AWAITS HERE</div>
            </div>
          </div>

          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Find your new best friend.</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label className="input-label" htmlFor="email">Email</label>
            <input
              id="email"
              className="text-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <label className="input-label" htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                className="text-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Toggle password"
              >
                <span className="icon">{showPassword ? "Hide" : "Show"}</span>
              </button>
            </div>

            <button type="submit" className="login-button">Login</button>

            {/* ✅ ADMIN LOGIN BUTTON */}
            <button
              type="button"
              className="login-button admin-login"
              onClick={() => {
                setIsAdminLogin(true);
                handleSubmit(new Event("submit"));
              }}
              style={{ backgroundColor: "#f08080", marginTop: "10px" }}
            >
              Admin Login
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/SignUp">Sign up here</Link>
          </p>
        </div>

        <div className="right pet-animation-container" aria-hidden>
          <div className="pet-emoji cat">🐱</div>
          <div className="pet-emoji dog">🐶</div>
        </div>
      </div>
    </div>
  );
}
