import { UserPage } from "../../Components/UserPage";
import { ModalProvider } from "../../providers/ModalContext";

export const HubPage = () => {
  return (
    <ModalProvider>
      <UserPage />
    </ModalProvider>
  );
};
