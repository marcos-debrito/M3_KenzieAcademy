import { GlobalReset } from "./styles/reset.js";
import { GlobalStyles } from "./styles/global.js";

import { Header } from "./components/Header/index.jsx";
import { StyledSection } from "./styles/appStyle.js";
import { Form } from "./components/Form/index.jsx";
import { NoteNumbers } from "./components/NoteNumbers/index.jsx";
import { ListSection } from "./components/ListSection/index.jsx";
import { DivContainer } from "./styles/container.js";

import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const lastNote = JSON.parse(localStorage.getItem("@nuKenzie:notes"));
  const [noteList, setNoteList] = useState(lastNote || []);
  localStorage.setItem("@nuKenzie:notes", JSON.stringify(noteList));

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <DivContainer>
          <StyledSection>
            <Form setNoteList={setNoteList} />
          </StyledSection>
          <NoteNumbers noteList={noteList} />
        </DivContainer>
        <ListSection noteList={noteList} setNoteList={setNoteList} />
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
