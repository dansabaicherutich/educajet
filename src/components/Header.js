import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="hlogo">
        <img className="logo" src="../Assets/college logo.png" alt="logo"></img>
        <h2>Educajet College</h2>
      </div>

      <div className="hbutton">
        <button>Free Courses</button>
        <button>Careers</button>
        <button>Resources</button>
        <button>Certification</button>
      </div>

      <div className="hright">
        <div className="hsearch">
          <input placeholder="What do you want to Learn?.."></input>
          <button><SearchIcon color="success" fontSize="medium"/></button>
          
        </div>
        <div className="hbuttons">
          <button className="b1">Sign Up</button>
          <button className="b2">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
