import img from "../../assets/nukenzie.svg";

import { StyledHeader } from "../../styles/header.js";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={img} alt="Logo da NuKenzie" />
    </StyledHeader>
  );
};
