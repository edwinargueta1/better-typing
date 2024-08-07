import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar(){

    const location = useLocation();

    return (
      <div className="navBarWrapper">
        <nav className="navBar">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Profile"
                className={location.pathname === "/Profile" ? "active" : ""}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/Leaderboard"
                className={location.pathname === "/Leaderboard" ? "active" : ""}
              >
                Leaderboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}