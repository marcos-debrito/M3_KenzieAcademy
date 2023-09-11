import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { StyledSection } from "./style";
import { ModalAddTech } from "../../Modal/ModalAddTech/index";
import { TechItens } from "../Fragments/techItens";

export const SectionTech = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <>
      <StyledSection>
        <div className="tech__title">
          <h2>Tecnologias</h2>
          <span
            onClick={() => {
              setIsOpen(true);
            }}
          >
            +
          </span>
        </div>
        {isOpen ? <ModalAddTech /> : null}

        <ul className="tech__list">
          <TechItens />
        </ul>
      </StyledSection>
    </>
  );
};
