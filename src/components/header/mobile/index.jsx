import React, { useState } from "react";
import { Contact, Container, Nav } from "./styles";
import { NavLink } from "react-router-dom";
import Close from "../../../assets/Close.svg";
import Facebook from "../../../assets/Facebook.svg";
import Github from "../../../assets/Github.svg";
import Twitter from "../../../assets/Twitter.svg";

const HeaderMobile = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Container>
        <p>gustavo-gomes</p>
        {active ? (
          <img
            src={Close}
            alt="Close button"
            onClick={() => setActive(!active)}
          />
        ) : (
          <span onClick={() => setActive(!active)}></span>
        )}

        <Nav className={active ? "active" : ""}>
          <ul>
            <NavLink to="/" onClick={() => setActive(!active)}>
              <li>_hello</li>
            </NavLink>
            <NavLink to="/about" onClick={() => setActive(!active)}>
              <li>_about-me</li>
            </NavLink>
            <NavLink to="/" onClick={() => setActive(!active)}>
              <li>_projects</li>
            </NavLink>
            <NavLink to="/" onClick={() => setActive(!active)}>
              <li>_contact-me</li>
            </NavLink>
          </ul>
        </Nav>
      </Container>
      <Contact className={active ? "active" : ""}>
        <p>find me in:</p>
        <ul>
          <NavLink>
            <li>
              <img src={Facebook} alt="" />
            </li>
          </NavLink>
          <NavLink>
            <li>
              <img src={Github} alt="" />
            </li>
          </NavLink>
          <NavLink>
            <li>
              <img src={Twitter} alt="" />
            </li>
          </NavLink>
        </ul>
      </Contact>
    </>
  );
};

export default HeaderMobile;
