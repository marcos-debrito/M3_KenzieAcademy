import { useContext, useEffect } from "react";
import { useRef } from "react";
import { ModalForm, ModalOverlay } from "../style";
import { ModalContext } from "../../../providers/ModalContext";
import { useForm } from "react-hook-form";

export const ModalAddTech = () => {
  const { register, handleSubmit, reset } = useForm({});
  const modalRef = useRef(null);
  const { setIsOpen, submitNewTech } = useContext(ModalContext);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const submit = (formData) => {
    const userToken = localStorage.getItem("@KenzieHub:token");
    submitNewTech(formData, userToken);
    reset();
  };

  return (
    <ModalOverlay role="dialog">
      <div className="modal__box" ref={modalRef}>
        <header>
          <p>Cadastrar tecnologia</p>
          <button
            className="button__close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            x
          </button>
        </header>
        <ModalForm onSubmit={handleSubmit(submit)} autoComplete="off">
          <div className="container__inputs">
            <label htmlFor="techName">Nome</label>
            <input
              type="text"
              id="techName"
              placeholder="Digite o nome..."
              {...register("title")}
            />

            <label htmlFor="addStatus">Selecionar Status</label>
            <select id="addStatus" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar tecnologia</button>
        </ModalForm>
      </div>
    </ModalOverlay>
  );
};
