import React from "react";
import { Container, Nav } from "./styles";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <p>gusatvo-gomes</p>
      <Nav>
        <ul>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            <li>_hello</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            <li>_about-me</li>
          </NavLink>
          <NavLink
            to="/projects"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            <li>_projects</li>
          </NavLink>
        </ul>
      </Nav>
      <div className="contactMe">
        <p>_contact-me</p>
      </div>
    </Container>
  );
};

export default Header;
