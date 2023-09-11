import { createContext, useContext } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { UserContext } from "./UserContext";
import { toastError, toastSuccess } from "../services/toasts";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { setTechList, techList } = useContext(UserContext);

  const submitNewTech = async (formData, token) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      toastSuccess("Tecnologia Adicionada");
      setTechList((techList) => [...techList, data]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const editTech = async (id, formData, token) => {
    try {
      const { data } = await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastSuccess("Tecnologia Atualizada!");

      const filtered = techList.filter((tech) => tech.id !== id);
      const filter = techList.filter((tech) => tech.id === id);

      filter[0].status = data.status;
      setTechList([...filtered, ...filter]);
      setIsOpenEdit(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteTech = async (id, token) => {
    try {
      const { data } = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastSuccess("Tecnologia Excluida!");
      const filtered = techList.filter((tech) => tech.id !== id);
      setTechList(filtered);
    } catch (error) {
      toastError(error.response.data.message);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        setIsOpenEdit,
        isOpenEdit,
        submitNewTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
