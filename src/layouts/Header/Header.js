import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";
import Logo from "../../assets/images/logoHeader.svg";

function Navigation () {
    return (
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="Logo Kasa" className="nav_logo"></img>
        </Link>
        <div className="nav_main">
          <NavLink activeclassname="active_link"  to="/">
            Accueil
          </NavLink>
          <NavLink activeclassname="active_link" to="/a-propos"> 
            A Propos
          </NavLink>
        </div>
      </nav>
    );
  }

export default Navigation;