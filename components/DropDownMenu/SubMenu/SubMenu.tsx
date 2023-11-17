import Image from "next/image";
import { useState } from "react";
import { Container } from "./styles";

interface SubMenuProps {
  item: {
    title: string;
    items: string[];
  };
}

const SubMenu = ({ item }: SubMenuProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev)
  }

  return (
    <Container>
      <p onClick={handleClick}>
        <Image src="/ArrowOUtline.svg" width={8} height={8} alt="arrow" />
        <Image src="/Dir.svg" width={10} height={10} alt="arrow" />
        {item.title}
      </p>
      <ul className={active ? 'active': ''}>
        {item.items.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </Container>
  );
};

export default SubMenu;
