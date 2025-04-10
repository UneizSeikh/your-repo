import { Link } from "react-router-dom";
import signupImage from "../assets/images/sign-up.png";

const SignUpPage = () => {
    return (
        <div className="login-container sign_up_container">
            <div className="illustration">
                <img src={signupImage} alt="Sign Up Illustration" />
            </div>
            <div className="login-box">
                <h2>Welcome To E-commerce</h2>
                <p className="subtitle">Create New Account</p>
                <form>
                    <div className="name-fields">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="firstName"
                            autoComplete="given-name"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            required
                        />
                    </div>

                    <div className="mobile-fields">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            autoComplete="email"
                            required
                        />
                        <div className="phone-group">
                            <select name="countryCode" required>
                                <option value="+1">+1</option>
                                <option value="+91">+91</option>
                                <option value="+44">+44</option>
                                {/* Add more if needed */}
                            </select>
                            <input
                                type="tel"
                                placeholder="Mobile No"
                                name="phone"
                                autoComplete="tel"
                                required
                            />
                        </div>
                    </div>

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="new-password"
                        required
                    />

                    <label className="check_box">
                        <input type="checkbox" required /> I agree with
                        <a href="#" className="ps-1">Terms</a> and
                        <a href="#" className="ps-1">Privacy</a>
                    </label>

                    <button type="submit" className="login-btn mt-2">Sign Up</button>
                </form>

                <hr />
                <p className="signup-text mb-0">
                    Already Have An Account?
                    <Link to="/login" className="ps-2">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
