import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/login.gif";
import { Row, Col } from "reactstrap";
import NavBar from "./welcome-nav-bar";


export default class Welcome extends Component {


  render() {
    return (
      <>
        <NavBar />
        <div className="auth-wrapper" style={{ marginTop: "5%" }}>
          <Row>
            <Col md={6} style={{textAlign:"center"}}>
              <img
                src={Logo}
                alt=""
                style={{
                  height: "80%",
                  width:"auto",
                  margin:"5% 0 0 15%"
                }}
              />
            </Col>
            <Col md={6}>
              <div style={{ marginTop: "5%" }}>
                <h1>JobNest</h1>
                <h6>Find your choice of job with us.</h6>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsum.
                </p>
                <Link to="/login">
                  <button type="button" class="btn  button-style">
                    Sign In
                  </button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">
                  <button type="button" class="btn btn-outline-info">
                    Sign Up
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="container" style={{ marginBottom: "5%", marginTop:"5%" }}>
            <Row>
              <Col>
              <div className="card mb-2 shadow p-3 bg-white rounded">
                <Col md={2}>
                  <img src={Logo} alt="" width="60" height="60" />
                </Col>
                <Col md={10}>
                  <h6>Job Search</h6>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem
                  </p>
                </Col>
                </div>
              </Col>
              <Col>
              <div className="card mb-2 shadow p-3 bg-white rounded">
                <Col md={2}>
                  <img src={Logo} alt="" width="60" height="60" />
                </Col>
                <Col md={10}>
                  <h6>Save for latter</h6>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem
                  </p>
                </Col>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
              <div className="card mb-2 shadow p-3 bg-white rounded">
                <Col md={2}>
                  <img src={Logo} alt="" width="60" height="60" />
                </Col>
                <Col md={10}>
                  <h6>Upload resume</h6>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem
                  </p>
                </Col>
                </div>
              </Col>
              <Col>
              <div className="card mb-2 shadow p-3 bg-white rounded">
                <Col md={2}>
                  <img src={Logo} alt="" width="60" height="60" />
                </Col>
                <Col md={10}>
                  <h6>Direct Apply</h6>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem
                  </p>
                </Col>
                </div>
              </Col>
            </Row>
          </div>
          <br>
          </br>
        </div>
      </>
    );
  }
}
