import logo from "../../../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";

export const ContainerLogout = () => {
  const { logout } = useContext(UserContext);

  return (
    <>
      <div>
        <img src={logo} alt="Logo da página kenziehub" />
        <button
          onClick={() => {
            logout();
          }}
        >
          Sair
        </button>
      </div>
    </>
  );
};
