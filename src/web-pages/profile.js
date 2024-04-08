import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import OtherNavBar from "./other-nav-bar";

const Profile = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [userDetails, setUserDetails] = useState({
    username: "",
    emailAdd: "",
    password: "",
  });

  const setPasswordShown = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { username, password, emailAdd } = userDetails;
  return (
    <>
      <OtherNavBar />
      <div className="profile-wrapper" style={{ marginTop: "7%" }}>
        <div className="profile-inner">
          <form>
            <img
              src={Logo}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />

            <h3>Personal Details</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                required
                onChange={handleChange}
                name="username"
                id="username"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                required
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
                name="emailAdd"
                id="emailAdd"
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
            <button type="submit" className="btn btn-block  button-style">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Profile;
