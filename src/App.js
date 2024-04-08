import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./web-pages/login";
import Welcome from "./web-pages/welcome";
import Register from "./web-pages/register";
import Home from "./web-pages/home";
import JobDetail from "./web-pages/job-detail";
import Profile from "./web-pages/profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSession();
  }, []);

  const setSession = async () => {
    try {
      
      setIsAuthenticated(true);
      // const user = await Auth.currentAuthenticatedUser();
      // setUser(user);
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
    setIsAuthenticating(false);
  };

  return (
    <BrowserRouter>
      {!isAuthenticating && (
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              component={(props) => (
                <Login
                  {...props}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              )}
            />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/home"
              component={(props) => (
                <Home
                  {...props}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              )}
            />
            <Route
              exact
              path="/job-detail"
              component={(props) => (
                <JobDetail
                  {...props}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              component={(props) => (
                <Profile
                  {...props}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              )}
            />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </div>
      )}
      )
    </BrowserRouter>
  );
}

export default App;
