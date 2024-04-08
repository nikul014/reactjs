import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import OtherNavBar from "./other-nav-bar";
import { Row, Col } from "reactstrap";
import { CiBookmark } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";

const Home = (props) => {
    return (
      <>
        <OtherNavBar />
        <div className="auth-wrapper" style={{ marginTop: "7%" }}>
          <div className="auth-inner-search">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <img
                src="https://media.istockphoto.com/vectors/search-icon-vector-id1068237878?k=20&m=1068237878&s=170667a&w=0&h=BpBnkSHoDP3tPTyBvzu_rWcVVb_c0dTSNs9XbC-xfc8="
                alt="show/hide"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
          <br></br>
          <div className="auth-inner-list">
            <Row>
              <Col>
                <div className="card mb-2 shadow p-1 bg-white rounded">
                  <Row className="no-gutters">
                    <Col md={4}>
                      <img src={Logo} alt="" />
                    </Col>
                    <Col md={8}>
                      <div className="card-body">
                        <h5 className="card-title">Job Title</h5>
                        <p className="card-text">Location</p>
                        <p className="text-highlight">Full-Time</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ padding: "0 5% 0 5%" }}>
                      <p className="card-text">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div style={{ float: "right", marginBottom: "1%" }}>
                        <button type="button" class="btn btn-info">
                          <CiBookmark /> 
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-info">
                          <CgDetailsMore />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div className="card mb-2 shadow p-1 bg-white rounded">
                  <Row className="no-gutters">
                    <Col md={4}>
                      <img src={Logo} alt="" />
                    </Col>
                    <Col md={8}>
                      <div className="card-body">
                        <h5 className="card-title">Job Title</h5>
                        <p className="card-text">Location</p>
                        <p className="text-highlight">Full-Time</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ padding: "0 5% 0 5%" }}>
                      <p className="card-text">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div style={{ float: "right", marginBottom: "1%" }}>
                        <button type="button" class="btn btn-info">
                          <CiBookmark />
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-info">
                          <CgDetailsMore />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
}
export default Home;
