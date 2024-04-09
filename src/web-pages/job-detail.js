import OtherNavBar from "./other-nav-bar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Row, Col } from "reactstrap";
import axios from "axios";

const JobDetail = (props) => {
  const history = useHistory();
  const [jobLocation, setjobLocation] = useState("");
  const [jobPostId, setJobPostId] = useState("");
  const [jobSavedPostId, setSavedJobPostId] = useState("1");
  const [jobTitle, setjobTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [jobRole, setjobRole] = useState("");
  const [salary, setsalary] = useState("");
  const [jobTypeName, setjobTypeName] = useState("");
  const [siteUrl, setSiteURL] = useState("");

  useEffect(() => {
    setJobPostId(localStorage.getItem("jobPostId"));
    setjobLocation(localStorage.getItem("jobLocation"));
    setjobTitle(localStorage.getItem("jobTitle"));
    setImageURL(localStorage.getItem("imageURL"));
    setjobDescription(localStorage.getItem("jobDescription"));
    setjobRole(localStorage.getItem("jobRole"));
    setsalary(localStorage.getItem("salary"));
    setjobTypeName(localStorage.getItem("jobTypeName"));
    setSiteURL(localStorage.getItem("siteUrl"));
  }, []);

  const bookmarkFunction = async (e) => {
    console.log("Bookmark")
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://wnuj9tp6n0.execute-api.us-east-1.amazonaws.com/test/job-saved-post-create",
        {
          jobSavedPostId: jobSavedPostId,
          jobPostId: jobPostId,
          userId: "1",
          jobTitle: jobTitle,
          jobDescription: jobDescription,
          jobType: jobTypeName,
          jobLocation: jobLocation,
          time: "Last update 4 minutes",
          imageURL: imageURL,
          jobRole: jobRole,
          siteUrl: siteUrl,
          salary: salary,
        }
      );
      console.log("resp", response)
      history.replace("/bookmark");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {props.isAuthenticated ? (
        <>
          <OtherNavBar />
          <div className="auth-wrapper" style={{ marginTop: "70px" }}>
            <div className="auth-inner-search">
              <img
                src={imageURL}
                style={{ width: "10%", height: "auto", float: "left" }}
              />
              <h3 style={{ textAlign: "start" }}>{jobTitle}</h3>
              <div
                style={{
                  width: "10%",
                  height: "auto",
                  float: "right",
                  marginTop: "-5%",
                }}
              >
                <Row>
                  <Col>
                    <a
                      className="btn button-style"
                      href={siteUrl}
                      style={{ float: "right", marginTop: "10%" }}
                    >
                      Apply Now
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      style={{ float: "right", marginTop: "5%" }}
                      onClick={bookmarkFunction}
                    >
                      Bookmark
                    </button>
                  </Col>
                </Row>
              </div>

              <p> - {jobLocation}</p>
              <p>
                {" "}
                - {jobTypeName} -{salary}
              </p>
              <p style={{ textAlign: "start" }}>{jobDescription}</p>
              <p style={{ textAlign: "start" }}><b>Role:</b></p>

              <p style={{ textAlign: "start" }}>{jobRole}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h1>Opps!</h1>
            <p>
              You are logout! Please click <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default JobDetail;
