import React from "react";
import { Container } from "./styles";
import DropDown from "../../components/dropDown";
import { _aboutMe } from "./info";

export const About = () => {
  return (
    <Container>
      <p>_about-me</p>
      {_aboutMe.map((about) => 
        <DropDown key={about.name} aboutMe={about} />
      )}
    </Container>
  );
};
