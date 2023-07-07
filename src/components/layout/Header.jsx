import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <Link to="/">YOUNA</Link>
      <nav className="nav"></nav>
      <Link to="/" className="contact">
        contact
      </Link>
    </header>
  );
};

export default Header;
