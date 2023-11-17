'use client'
import { useState } from "react";
import { Container, DropDownMenuContent } from "./styles";
import Image from "next/image";
import { aboutMe } from "../../constants/index";
import SubMenu from "./SubMenu/SubMenu";

interface dirProps{
    title: string
    items: string[]
}

interface itemProps{
    item:{
        title: string
        dir: dirProps[]
    }
}


const DropDownMenu = ({item}: itemProps ) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive((prev) => !prev)
  }
     return (
    <Container>
      <p className="firstMenu" onClick={handleClick}>
        <Image src='/Arrowfull.svg'
        width={30}
        height={20}
        alt="arrow"/>

        {item.title}
      </p>

      <DropDownMenuContent className={active? 'active': ''}>
        {item.dir.map((item, index) =>(
          <SubMenu key={index} item={item}/>
        ))}
      </DropDownMenuContent>
    </Container>
  );
};

export default DropDownMenu;
