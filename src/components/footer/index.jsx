import React from "react";
import { Container, SocialMedia } from "./styles";
import Facebook from "../../assets/Facebook.svg";
import Github from "../../assets/Github.svg";
import Twitter from "../../assets/Twitter.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <p>find me in:</p>
      <SocialMedia>
        <NavLink to="/">
          <img src={Facebook} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={Twitter} alt="" />
        </NavLink>
      </SocialMedia>
        <NavLink to="/">
          @gugugomes
          <img src={Github} alt="" />
        </NavLink>
    </Container>
  );
};

export default Footer;
