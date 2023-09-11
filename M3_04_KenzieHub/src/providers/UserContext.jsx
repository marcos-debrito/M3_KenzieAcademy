import { createContext, useEffect } from "react";
import { toastError, toastLogout, toastSuccess } from "../services/toasts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  const [techList, setTechList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    const userId = localStorage.getItem("@KenzieHub:id");

    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDataUser(data);
        setTechList(data.techs);
        navigate("/hub");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token && userId) {
      loadUser();
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    toastLogout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const UserLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setDataUser(data.user);
      setTechList(data.user.techs)
      toastSuccess("Login feito com sucesso!");
      localStorage.setItem("@KenzieHub:token", data.token);
      localStorage.setItem("@KenzieHub:id", data.user.id);

      navigate("/hub");
    } catch (error) {
      toastError("houve algum erro");
    }
  };

  const UserRegister = async (formData) => {
    try {
      delete formData.confirm;
      const { data } = await api.post("/users", formData);
      navigate("/");
      toastSuccess("Usuário registrado!");
    } catch (error) {
      toastError(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        logout,
        UserLogin,
        UserRegister,
        setDataUser,
        dataUser,
        techList,
        setTechList,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
