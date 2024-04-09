import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useHistory } from "react-router";

const OtherNavBar = (props) => {
  const history = useHistory();
  
  const handleLogOut = (event) => {
    event.preventDefault();
    try {
      history.replace("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const subscribe = (event) => {
    event.preventDefault();
    console.log("Subscribe Successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <img src={Logo} alt="" width="auto" height="60" />

        <Link className="navbar-brand" to={"/home"}>
          <b style={{ color: "var(--textColor)" }}>JobNest</b>
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={subscribe}
                style={{ cursor: "pointer" }}
              >
                Subscribe
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/bookmark"}>
                WishList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile"}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={handleLogOut}
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default OtherNavBar;
