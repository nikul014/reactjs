import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router";

const Register = (props) => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);

  const setPasswordShown = () => {
    setShowPassword(!showPassword);
  };

  const setRePasswordShown = () => {
    setShowRePassword(!showRePassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { username, email, password, repassword } = userDetails;

  const registerFunction = async (e) => {
    e.preventDefault();
    // try {
    //   if (password === repassword) {
    //     await Auth.signUp({
    //       username: username,
    //       password: password,
    //       attributes: {
    //         email: email,
    //       },
    //     });
    //     const response = await axios.post(
    //       "https://9mwtisdt71.execute-api.us-east-1.amazonaws.com/create-topic",
    //       {
    //         topicName: username,
    //         emailAddress: email,
    //       }
    //     );
    //     await axios.post(
    //       "https://9mwtisdt71.execute-api.us-east-1.amazonaws.com/create-subscription",
    //       {
    //         topicArn: response.data.TopicArn,
    //         emailAddress: email,
    //       }
    //     );
    //     history.replace("/welcome");
    //   } else {
    //     setErrorMessage("Password and re-password did not matched");
    //   }
    // } catch (error) {
    //   setErrorMessage(error.message);
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
              <form>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <h1>Welcome to JobNest!!</h1>
                  <h3 style={{ textAlign: "left" }}>Register Here.</h3>
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                    name="username"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    type={showPassword ? "password" : "text"}
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
                <div className="form-group">
                  <label>Re enter Password</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Re Enter password"
                    id="repassword"
                    name="repassword"
                    type={showRePassword ? "password" : "text"}
                    value={repassword}
                    onChange={handleChange}
                  />
                  <img
                    src={
                      showRePassword
                        ? "https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png"
                        : "https://static.thenounproject.com/png/777508-200.png"
                    }
                    onClick={setRePasswordShown}
                    className="show-password-icon"
                    alt="show/hide"
                  />
                </div>
                <br></br>
                <Link to="/home">
                  <button type="submit" className="btn btn-block button-style">
                    Register
                  </button>
                </Link>
                <p className="forgot-password text-right">
                  Already registered{" "}
                  <Link to="/login" style={{ color: "var(--primary)" }}>
                    <b>Log in?</b>
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

export default Register;
