import React from "react";
import { Link } from "gatsby";
import Page from "../components/Page";

export default () => {
  return (
    <Page>
      <div className="title">
        <h1>My Games</h1>
        <body>
          <div className="data">
            <div className="linkButton">
              <Link to="/shooter">Shooter Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/horror">Horror Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/adventure">Adventure Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/Action">Action Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/simulation">Simulation Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/strategy">Strategy Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/sports">Sports Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/stealth">Stealth Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/mmorpg">MMORP Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/sandbox">Sandbox Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/towerDefence">Tower Defence Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/racing">Racing Games</Link>
            </div>
            <div className="linkButton">
              <Link to="/puzzle">Puzzle Games</Link>
            </div>
          </div>
        </body>
      </div>
    </Page>
  );
};
