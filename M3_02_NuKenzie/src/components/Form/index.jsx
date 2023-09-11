import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  StyledButton,
  StyledInput,
  StyledSelect,
  StyledForm,
} from "../../styles/form.js";

import { toast } from "react-toastify";

export const Form = ({ setNoteList }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    select: "in",
  });

  const addNoteToList = () => {
    const newNote = { ...formData, id: uuidv4() };
    setNoteList((noteList) => [...noteList, newNote]);
  };

  const submit = (e) => {
    e.preventDefault();
    addNoteToList();
    notify();
    setFormData({ ...formData, title: "", amount: "" });
  };

  const notify = () => {
    toast.success("Valor inserido com sucesso!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <StyledForm onSubmit={submit}>
        <label htmlFor="input__description">Descrição</label>
        <StyledInput
          type="text"
          id="input__description"
          value={formData.title}
          required
          placeholder="Digite aqui sua descrição"
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <p>Ex.: Compra de roupas</p>

        <label htmlFor="input__value">Valor (R$)</label>
        <StyledInput
          type="number"
          id="input__value"
          value={formData.amount}
          required
          placeholder="Digite o valor"
          onChange={(e) => {
            setFormData({ ...formData, amount: e.target.value });
          }}
        />

        <label>Tipo de Valor</label>
        <StyledSelect
          onChange={(e) => {
            setFormData({ ...formData, select: e.target.value });
          }}
        >
          <option value="in">Entrada</option>
          <option value="out">Saída</option>
        </StyledSelect>

        <StyledButton type="submit">Inserir Valor</StyledButton>
      </StyledForm>
    </>
  );
};
