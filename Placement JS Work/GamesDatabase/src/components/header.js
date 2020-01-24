import React from "react";
import { Link } from "gatsby";
// import banner from '../banner.jpeg'
export default () => {
  return (
    <header>
      <div className="navigation">
        <div className="bannner">
          {/* <img src={banner}></img> */}
        </div>
        <div className="linkButton">
          <Link to="/home">Home</Link>
        </div>
        <div className="linkButton">
          <Link to="/login">Login</Link>
        </div>
        <div className="linkButton">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="linkButton">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="linkButton">
          <Link to="/gamelist">Game List</Link>
        </div>
        <div className="linkButton">
          <Link to="/recommendations">Recomendations</Link>
        </div>
        <div className="linkButton">
          <Link to="/mygames">My Games</Link>
        </div>
      </div>
    </header>
  );
};