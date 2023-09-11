import { useContext, useState } from "react";
import { UserContext } from "../../../../providers/UserContext";
import { ModalContext } from "../../../../providers/ModalContext";
import { ModalEditTech } from "../../../Modal/ModalEditTech";

export const TechItens = () => {
  const { techList } = useContext(UserContext);
  const { isOpenEdit, setIsOpenEdit } = useContext(ModalContext);
  const [infos, setInfos] = useState({ title: "", id: "" });

  return (
    <>
      {techList.length > 0 ? (
        techList.map((tech) => (
          <li
            key={tech.id}
            onClick={() => {
              setInfos({ title: tech.title, id: tech.id });
              setIsOpenEdit(true);
            }}
          >
            <span>{tech.title}</span>
            <span>{tech.status}</span>
          </li>
        ))
      ) : (
        <span className="span__noTech">
          Oops... parece que não temos tecnologias adicionadas :({" "}
        </span>
      )}

      {isOpenEdit ? <ModalEditTech infos={infos} /> : null}
    </>
  );
};
