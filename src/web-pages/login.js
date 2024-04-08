import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router";

const Login = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(true);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const setPasswordShown = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { username, password } = userDetails;

  const loginFun = async (e) => {
    e.preventDefault();
    // try {
    //   const user = await Auth.signIn(username, password);
    //   const email_verified = user.attributes["email"];
    //   if (email_verified) {
    //     props.setIsAuthenticated(true);
    //     props.setUser(user);
    //     history.push("/homepage");
    //     localStorage.setItem("username", username);
    //   }
    // } catch (error) {
    //   if (error.message === "Incorrect username or password.") {
    //     setErrorMessage("Incorrect username or password or not registered");
    //     history.replace("/login");
    //   } else {
    //     history.push("/welcome");
    //   }
    // }
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
                    name="username"
                    id="username"
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
                <Link to="/home">
                  <button type="submit" className="btn btn-block button-style">
                    Login
                  </button>
                </Link>
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
