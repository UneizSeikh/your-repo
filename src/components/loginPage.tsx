import { Link } from "react-router-dom";
import loginImage from "../assets/images/log-in.png";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="illustration">
        <img src={loginImage} alt="Login Illustration" />
      </div>
      <div className="login-box">
        <h2>Welcome To E-commerce</h2>
        <p className="subtitle">Log In Your Account</p>
        <form>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <div className="options">
            <label className="check_box">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <hr />
        <p className="signup-text">
          Don’t Have An Account? 
          <Link to="/signup" className="ps-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
