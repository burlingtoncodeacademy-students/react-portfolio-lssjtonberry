import React from "react";
import "./server.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./content/Home";
import AboutMe from "./content/AboutMe";
import ContactMe from "./content/ContactMe";
import Interests from "./content/Interests";
import Projects from "./content/Projects";
import WorkHistory from "./content/WorkHistory";
import NavBar from "./components/NavBar";
import Button from "@material-ui/core/Button";

const Footer = () => {
  /*Linked buttons to direct to given pathways. Ex: linkpath /aboutme will(if clicked), send you to AboutMe section of portfolio*/
  return (
    <div id="footer">
      <Link to="/">
        <Button variant="contained" color="secondary">
          Home
        </Button>
      </Link>
      <Link to="/aboutme">
        <Button variant="contained" color="secondary">
          About Me
        </Button>
      </Link>
      <Link to="/projects">
        <Button variant="contained" color="secondary">
          Projects
        </Button>
      </Link>
      Copyright: Allan Hall inc. For questions or inquiries contact me at
      flashfantasy@outlook.com
      <Link to="/interests">
        <Button variant="contained" color="secondary">
          Interests
        </Button>
      </Link>
      <Link to="/workhistory">
        <Button variant="contained" color="secondary">
          Work History
        </Button>
      </Link>
      <Link to="/contactme">
        <Button variant="contained" color="secondary">
          Contact Me
        </Button>
      </Link>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 Page Not Found</h2>
    </div>
  );
};

function Server() {
  return (
    /*BrowserRouter is the router implementation for web browsers*/ 
    <BrowserRouter>
      <NavBar />
      {/*Switch returns only the first matching route rather than all matching routes.*/}
      <Switch>
        {/*Route is the conditionally shown component based on matching a path to a URL.*/}
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/interests" component={Interests} />
        <Route path="/workhistory" component={WorkHistory} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Server;
