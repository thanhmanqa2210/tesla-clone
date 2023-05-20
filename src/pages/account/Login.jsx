import React, { useEffect } from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isNowLogin } from "../../app/actions/index";
function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isNowLogin(true));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_container">
      <h1>Sign In</h1>
      <form className="form_signIn">
        <label htmlFor="textEmailAddress">
          <span>Email Address</span>
          <i className="fa-sharp fa-solid fa-circle-exclamation" />
        </label>
        <input
          type="email"
          id="textEmailAddress"
          name="email"
          className="sign-in"
        />
        <input
          type="submit"
          value="NEXT"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
      <div className="forgot-createAccount">
        <div className="forgot-account">
          <a
            href="https://www.tesla.com/support/account-support?redirect=no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot Email?
          </a>
          <Link className="forgot-password" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <span>OR</span>
        <Link to="/register" className="create-account">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
