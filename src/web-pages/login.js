import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/login.gif";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router";
import { Alert } from "reactstrap";

const Login = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const setPasswordShown = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const [errorMessage, setErrorMessage] = useState("");

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const { email, password } = userDetails;

  const loginFun = async (e) => {
    e.preventDefault();
    try {
      props.setIsAuthenticated(true);
      history.push("/home");
      localStorage.setItem("email", email);
    } catch (error) {
      if (error.message === "Incorrect email or password.") {
        setErrorMessage("Incorrect email or password or not registered");
        history.replace("/login");
      } else {
        history.push("/welcome");
      }
    }
  };
  return (
    <div className="login-register-overflow">
      <Row className="login-register-page">
        <Col md={5}>
          <div className="login-register-image">
            <img
              src={Logo}
              alt=""
              style={{
                width: "auto",
                height: "auto",
                alignContent: "center",
                verticalAlign: "center",
              }}
            />
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={loginFun}>
                {errorMessage && (
                  <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {errorMessage}
                  </Alert>
                )}
                <h3
                  style={{
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  Log In
                </h3>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Enter password"
                    type={showPassword ? "password" : "text"}
                    value={password}
                    onChange={handleChange}
                    name="password"
                    id="password"
                  />
                  <img
                    src={
                      showPassword
                        ? "https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png"
                        : "https://static.thenounproject.com/png/777508-200.png"
                    }
                    onClick={setPasswordShown}
                    className="show-password-icon"
                    alt="show/hide"
                  />
                </div>

                <br></br>
                <button type="submit" className="btn btn-block button-style">
                  Login
                </button>
                <p className="forgot-password">
                  New User{" "}
                  <Link to="/register" style={{ color: "var(--primary)" }}>
                    <b>Register?</b>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
