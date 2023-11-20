'use client'
import { CodeSniped, Container, DropDownMenuContainer, Info, SnippetCard } from './styles'
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'
import { aboutMe } from "../../constants/index";
import Image from 'next/image';


const About = () => {
  return (
    <Container>
        <p className='about'>_about-me</p>
        <DropDownMenuContainer>
          {aboutMe.map((item) => (
            <DropDownMenu key={item.title} item={item}/>
          ))}
        </DropDownMenuContainer>
        <Info>
          <h3>bio</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolor commodi dolorum! Neque minus voluptates magnam asperiores eaque molestias numquam inventore, aut dolorum. Voluptatem neque doloremque aperiam. Consequatur, ad placeat?
            Esse, harum. Atque quisquam necessitatibus ut quis fuga pariatur, consequatur, sequi quam doloremque temporibus tempore explicabo placeat debitis a beatae dolorum ad illo nesciunt, itaque delectus! Dolor sint neque voluptatum.
          </p>
        </Info>
        <CodeSniped>
          <p>// Code snippet showcase:</p>
          <SnippetCard>
            <div>
              <Image
              src='https://github.com/devgugga.png'
              width={20}
              height={20}
              alt='profile picture'/>
            </div>
          </SnippetCard>
        </CodeSniped>


    </Container>
  )
}

export default About