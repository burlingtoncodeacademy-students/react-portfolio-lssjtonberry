import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return <div id ="navbar">
      {/*Each button links to their corresponding pages as per a set path. Link component is used to make links to different routes and allow for navigation around my app. Works like an <a> tag.*/}
      <Link to="/"><Button variant="contained" color="primary">
      Home
    </Button></Link>
    <Link to="/aboutme"><Button variant="contained" color="primary">
      About Me
    </Button></Link>
    <Link to="/projects"><Button variant="contained" color="primary">
      Projects
    </Button></Link>
    <Link to="/interests"><Button variant="contained" color="primary">
      Interests
    </Button></Link>
    <Link to="/workhistory"><Button variant="contained" color="primary">
      Work History
    </Button></Link>
    <Link to="/contactme"><Button variant="contained" color="primary">
      Contact Me
    </Button></Link>
    </div>;
  };


  

  export default NavBar
