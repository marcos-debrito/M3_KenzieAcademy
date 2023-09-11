import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../providers/ModalContext";
import { ModalForm, ModalOverlay } from "../style";

export const ModalEditTech = ({ infos }) => {
  const { register, handleSubmit } = useForm({});
  const { setIsOpenEdit, deleteTech, editTech } = useContext(ModalContext);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpenEdit(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const userToken = localStorage.getItem("@KenzieHub:token");

  const submit = (formData) => {
    editTech(infos.id, formData, userToken, infos.title);
  };

  const removeTech = () => {
    deleteTech(infos.id, userToken);
    setIsOpenEdit(false);
  };

  return (
    <ModalOverlay role="dialog">
      <div className="modal__box" ref={modalRef}>
        <header>
          <p>Edite a tecnologia</p>
          <button
            className="button__close"
            onClick={() => {
              setIsOpenEdit(false);
            }}
          >
            x
          </button>
        </header>

        <ModalForm onSubmit={handleSubmit(submit)} autoComplete="off">
          <div className="container__inputs">
            <label htmlFor="techNameEdit">Nome</label>
            <input id="techNameEdit" type="text" value={infos.title} disabled />

            <label htmlFor="status">Status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="container__buttons">
            <button className="button__save" type="submit">
              Salvar alterações
            </button>
            <button
              className="button__delete"
              type="button"
              onClick={() => {
                removeTech();
              }}
            >
              Excluir
            </button>
          </div>
        </ModalForm>
      </div>
    </ModalOverlay>
  );
};
