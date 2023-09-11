import { NoteCard } from "./NoteCard/index.jsx";

export const NoteList = ({ noteList, setNoteList }) => {
  const removeNote = (noteId) => {
    setNoteList((noteList) => noteList.filter((note) => note.id !== noteId));
  };

  return (
    <div>
      <ul>
        {noteList.map((note) => (
          <NoteCard key={note.id} note={note} removeNote={removeNote} />
        ))}
      </ul>
    </div>
  );
};
