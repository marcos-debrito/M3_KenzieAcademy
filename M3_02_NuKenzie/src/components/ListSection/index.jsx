import { SectionInfos, StyledP } from "../../styles/noteList.js";
import { NoteList } from "./NoteList/index.jsx";

export const ListSection = ({ noteList, setNoteList }) => {
  return (
    <SectionInfos>
      <span className="infos__span">Resumo financeiro</span>

      {noteList.length > 0 ? (
        <NoteList noteList={noteList} setNoteList={setNoteList} />
      ) : (
        <StyledP>Você ainda não possui nenhum lançamento</StyledP>
      )}
    </SectionInfos>
  );
};
