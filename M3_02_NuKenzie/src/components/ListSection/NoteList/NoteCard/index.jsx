import { StyledLi } from "../../../../styles/noteList.js";

export const NoteCard = ({ note, removeNote }) => {
  const toNumber = Number(note.amount);
  const toMoney = toNumber.toLocaleString("pt-BT", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledLi 
    color={note.select == "in" ? "#03B898" : "#868E96"}>
      <div className="div__top">
        <span>{note.title}</span>
        <p>{note.select == "in" ? "Entrada" : "Saída"}</p>
      </div>
      <div className="div__bottom">
        <span>{toMoney}</span>
        <button
          onClick={() => {
            removeNote(note.id);
          }}
        >
          Excluir
        </button>
      </div>
    </StyledLi>
  );
};
