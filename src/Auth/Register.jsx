import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/slices/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
 import './register.css';

export const  Register = () => {
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.register.users);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (users.find((u) => u.email === formData.email)) {
      newErrors.email = "Email already exists";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.passwordConf) {
      newErrors.passwordConf = "Please confirm your password";
    } else if (formData.password !== formData.passwordConf) {
      newErrors.passwordConf = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    dispatch(login(formData));
    toast.success("Register success");
    navigate("../login");
  };

  return (
<div className="register-container">
  <h2 className="register-title">Register</h2>
  <form className="register-form" onSubmit={handleSubmit}>
 
    <div className="form-group">
      <label className="form-label">Name</label>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}
    </div>


    <div className="form-group">
      <label className="form-label">Email</label>
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
    </div>


    <div className="form-group">
      <label className="form-label">Password</label>
      <input
        className="form-input"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-message">{errors.password}</p>}
    </div>


    <div className="form-group">
      <label className="form-label">Confirm Password</label>
      <input
        className="form-input"
        type={showPassword ? "text" : "password"}
        name="passwordConf"
        placeholder="Re-type Password"
        value={formData.passwordConf}
        onChange={handleChange}
      />
      {errors.passwordConf && (
        <p className="error-message">{errors.passwordConf}</p>
      )}
    </div>

    <div className="form-group">
      <button
        type="button"
        className="toggle-password-btn"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>


    <div className="form-group">
      <button type="submit" className="submit-btn">Create Account</button>
    </div>
  </form>

  <div className="login-redirect">
    <p className="login-text">Already have an account?</p>
    <Link to="/login">
      <button className="login-btn">Login</button>
    </Link>
  </div>
</div>

  );
}