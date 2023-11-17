'use client'
import React from 'react'
import { Container, DropDownMenuContainer } from './styles'
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'
import { aboutMe } from "../../constants/index";


const About = () => {
  return (
    <Container>
        _about-me
        <DropDownMenuContainer>
          {aboutMe.map((item) => (
            <DropDownMenu key={item.title} item={item}/>
          ))}
        </DropDownMenuContainer>

    </Container>
  )
}

export default About