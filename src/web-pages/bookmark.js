import React, { useEffect, useState } from "react";
import Logo from "../logo.svg";
import OtherNavBar from "./other-nav-bar";
import { Row, Col } from "reactstrap";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { IoMdBookmark } from "react-icons/io";

const Bookmark = (props) => {
  const history = useHistory();
  const [jobslist, setJobsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchJob, setSearchJob] = useState("");
  useEffect(() => {
    getJobList();
  }, []);

  const getJobList = async () => {
    try {
      const response = await axios.get(
        "https://wnuj9tp6n0.execute-api.us-east-1.amazonaws.com/test/job-posts"
      );
      console.log("response", response);
      if (response.data.data.length < 1) {
        setJobsList(noJobFound);
      } else {
        setJobsList(response.data.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const bookmarkFunction = async (index) => {
    console.log("Delete Bookmark")
    try {
      const response = await axios.delete(
        "https://wnuj9tp6n0.execute-api.us-east-1.amazonaws.com/test/job-post-delete",
        {
          jobPostId: jobslist[index].jobPostId,
        }
      );
      console.log("resp", response)
      history.replace("/bookmark");
    } catch (error) {
      console.log(error.message);
    }
  };

  const noJobFound = [
    {
      jobTitle: "Job Found",
    },
  ];

  const handleChange = (event) => {
    setSearchJob(String(event.target.value));
  };

  

  const jobDetailPage = async (index) => {
    localStorage.setItem("jobPostId", jobslist[index].jobPostId);
    localStorage.setItem("jobTypeName", jobslist[index].jobType);
    localStorage.setItem("jobTitle", jobslist[index].jobTitle);
    localStorage.setItem("imageURL", jobslist[index].imageURL);
    localStorage.setItem("jobDescription", jobslist[index].jobDescription);
    localStorage.setItem("jobRole", jobslist[index].jobRole);
    localStorage.setItem("salary", jobslist[index].salary);
    localStorage.setItem("jobLocation", jobslist[index].jobLocation);
    localStorage.setItem("siteUrl", jobslist[index].siteUrl);
    history.push("/job-detail");
  };
  return (
    <>
      {props.isAuthenticated ? (
        <>
          <OtherNavBar />
          <div className="auth-wrapper" style={{ marginTop: "7%" }}>
            <div className="auth-inner-list">
              {loading ? (
                <div style={{ textAlign: "center", padding: "30px" }}>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-info" role="status">
                    <span className="sr-only"></span>
                  </div>
                  <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              ) : (
                jobslist.map((element, index) => {
                    return (
                      <div key={index}>
                        
                            <div className="card mb-2 shadow p-1 bg-white rounded">
                              <Row className="no-gutters">
                                <Col md={2}>
                                  <img
                                    src={
                                      element.imageURL ? element.imageURL : Logo
                                    }
                                    alt=""
                                    width="auto"
                                    height="100"
                                  />
                                </Col>
                                <Col md={8}>
                                  <div className="card-body">
                                    <h5 className="card-jobTitle">
                                      {element.jobTitle}
                                    </h5>
                                    <p className="card-text">
                                      {element.jobLocation}
                                    </p>
                                  </div>
                                </Col>
                                <Col md={2}>
                                  <div className="card-body">
                                    <Row>
                                      <Col> <button
                                      type="button"
                                      className="btn button-style"
                                      onClick={() => bookmarkFunction(index + 1)}
                                    >
                                      <IoMdBookmark /> Bookmarked
                                    </button></Col>
                                    </Row>
                                    <Row>
                                      <Col style={{marginTop:"5%"}}> <button
                                      type="button"
                                      className="btn btn-outline-info"
                                      onClick={() => jobDetailPage(index)}
                                    >
                                      <CgDetailsMore /> More details
                                    </button></Col>
                                    </Row>
                                    
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          
                      </div>
                    );
                  
                })
              )}
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
export default Bookmark;
