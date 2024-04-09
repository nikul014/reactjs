import React, { useEffect, useState } from "react";
import Logo from "../logo.svg";
import OtherNavBar from "./other-nav-bar";
import { Row, Col } from "reactstrap";
import { CiBookmark } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import LexChatbot from "./lex-chat-bot";

const FloatingButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}>
      Open Chat
    </button>
  );
};

const Home = (props) => {
  const history = useHistory();
  const [jobslist, setJobsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchJob, setSearchJob] = useState("");
  useEffect(() => {
    getJobList();
  }, []);
   const [isChatbotOpen, setIsChatbotOpen] = useState(false);

   const toggleChatbot = () => {
      setIsChatbotOpen(!isChatbotOpen);
   };

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
    console.log("Bookmark")
    try {
    const response = await axios.get(
                                "https://xcfvmr4612.execute-api.us-east-1.amazonaws.com/test/signup-user",
                               { params :  {
                                    "username": "unnati123",
                                    "password": "password",
                                    "firstName": "Unnati",
                                    "lastName": "Kapadia"
                              }  }
                              );
                              console.log(response);
response = await axios.get(
            "https://xcfvmr4612.execute-api.us-east-1.amazonaws.com/test/login-user",
          { params :  {
                "username": "unnati123",
                "password": "password"
            }}
          );
          console.log(response);


       response = await axios.post(
        "https://si9zbo39v3.execute-api.us-east-1.amazonaws.com/dev-1/job-saved-post-create",
        {
          jobSavedPostId: "1",
          jobPostId: jobslist[index].jobPostId,
          userId: "1",
          jobTitle: jobslist[index].jobTitle,
          jobDescription: jobslist[index].jobDescription,
          jobType: jobslist[index].jobTypeName,
          jobLocation: jobslist[index].jobLocation,
          time: "Last update 4 minutes",
          imageURL: jobslist[index].imageURL,
          jobRole: jobslist[index].jobRole,
          siteUrl: jobslist[index].siteUrl,
          salary: jobslist[index].salary,
          
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

  const getSearchKeyword = async () => {
    var dummyJobList = jobslist;
    var filteredList = [];
    dummyJobList.forEach((element) => {
      if (element.jobTitle == searchJob) {
        filteredList.push(element);
      }
    });
    if (filteredList.length != 0) {
      setJobsList(filteredList);
    } else if (filteredList.length == 0 && searchJob != "") {
      setJobsList([]);
    } else {
      setJobsList(jobslist);
    }
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
            <div>
                          {isChatbotOpen && <LexChatbot />}
                          <FloatingButton onClick={toggleChatbot} />
            </div>
            <div className="auth-inner-search">
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  id="search"
                  name="search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleChange}
                />
                <img
                  src="https://media.istockphoto.com/vectors/search-icon-vector-id1068237878?k=20&m=1068237878&s=170667a&w=0&h=BpBnkSHoDP3tPTyBvzu_rWcVVb_c0dTSNs9XbC-xfc8="
                  style={{ width: "50px", height: "50px" }}
                  onClick={getSearchKeyword}
                />
              </div>
            </div>
            <br></br>
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
                  if (index % 2 === 0) {
                    return (
                      <div key={index}>
                        <Row>
                          <Col md={6}>
                            <div className="card mb-2 shadow p-1 bg-white rounded">
                              <Row className="no-gutters">
                                <Col md={4}>
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
                                    <p className="text-highlight">
                                      {element.jobType}
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col style={{ padding: "0 5% 0 5%" }}>
                                  <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                    {element.jobDescription}
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      {element.time}
                                    </small>
                                  </p>
                                  <div
                                    style={{
                                      float: "right",
                                      marginBottom: "1%",
                                    }}
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-info"
                                      onClick={() => bookmarkFunction(index + 1)}
                                    >
                                      <CiBookmark />
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button
                                      type="button"
                                      className="btn btn-info"
                                      onClick={() => jobDetailPage(index)}
                                    >
                                      <CgDetailsMore />
                                    </button>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col md={6}>
                            {index + 1 < jobslist.length && (
                              <div className="card mb-2 shadow p-1 bg-white rounded">
                                <Row className="no-gutters">
                                  <Col md={4}>
                                    <img
                                      src={
                                        jobslist[index + 1].imageURL
                                          ? jobslist[index + 1].imageURL
                                          : Logo
                                      }
                                      alt=""
                                      width="auto"
                                      height="100"
                                    />
                                  </Col>
                                  <Col md={8}>
                                    <div className="card-body">
                                      <h5 className="card-jobTitle">
                                        {jobslist[index + 1].jobTitle}
                                      </h5>
                                      <p className="card-text">
                                        {jobslist[index + 1].jobLocation}
                                      </p>
                                      <p className="text-highlight">
                                        {jobslist[index + 1].jobType}
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col style={{ padding: "0 5% 0 5%" }}>
                                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                      {jobslist[index + 1].jobDescription}
                                    </p>
                                    <p className="card-text">
                                      <small className="text-muted">
                                        {jobslist[index + 1].time}
                                      </small>
                                    </p>
                                    <div
                                      style={{
                                        float: "right",
                                        marginBottom: "1%",
                                      }}
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-info"
                                        onClick={() => bookmarkFunction(index + 1)}
                                      >
                                        <CiBookmark />
                                      </button>
                                      &nbsp;&nbsp;&nbsp;
                                      <button
                                        type="button"
                                        className="btn btn-info"
                                        onClick={() => jobDetailPage(index + 1)}
                                      >
                                        <CgDetailsMore />
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </div>
                    );
                  } else {
                    return null;
                  }
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
export default Home;
