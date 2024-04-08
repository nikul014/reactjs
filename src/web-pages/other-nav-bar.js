import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

export default class OtherNavBar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          
            <img
              src={Logo}
              alt=""
              width="60" height="60"
            />

            <Link className="navbar-brand" to={"/welcome"}>
              <b style={{color:'var(--textColor)'}}>JobNest</b>
            </Link>
            
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/following"}>
                    WishList
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          
        </nav>
      </>
    );
  }
}
