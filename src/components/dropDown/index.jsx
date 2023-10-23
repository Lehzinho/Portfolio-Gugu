import { useState } from "react";
import { Container, Dir, DropDownMenu } from "./styles";

import Frame from "../../assets/Frame.svg";
import DirIcon from "../../assets/Dir.svg";
import Arrow from "../../assets/Arrow.svg";

const dirDropDown = () => {
  return <li>HELLO</li>;
};

const DropDown = ({ aboutMe }) => {
  const [active, setActive] = useState(false);
  const [dirActive, setDirActive] = useState(false);
  return (
    <Container>
      <DropDownMenu
        onClick={() => {
          setActive(!active);
          setDirActive(false);
        }}
      >
        <img src={Frame} alt="" className={active ? "" : "active"} />
        <p>{aboutMe.name}</p>
      </DropDownMenu>
      <Dir className={active ? "active" : ""}>
        {Object.entries(aboutMe.info).map(([key, value]) => (
          <li onClick={() => setDirActive(!dirActive)}>
            <img src={Arrow} alt="" />
            <img src={DirIcon} alt="" />
            <p>{key}</p>
            <ul className={dirActive ? "active" : ""}>
              {value.map((item) => (
                <dirDropDown/>
              ))}
            </ul>
          </li>
        ))}
      </Dir>
    </Container>
  );
};
export default DropDown;
