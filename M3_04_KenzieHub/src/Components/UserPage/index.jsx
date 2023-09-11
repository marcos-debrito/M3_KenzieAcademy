import { ContainerInfos, Header, SectionLine } from "./style";
import { useContext } from "react";
import { ContainerLogout } from "./Fragments/Logout";
import { SectionTech } from "./SectionTech";
import { UserContext } from "../../providers/UserContext";

export const UserPage = () => {
  const { dataUser } = useContext(UserContext);

  return (
    <>
      <Header>
        <ContainerLogout />
      </Header>
      <main>
        <SectionLine>
          <ContainerInfos>
            <h2>Olá, {dataUser ? dataUser.name : null}</h2>
            <h3>{dataUser ? dataUser.course_module : null}</h3>
          </ContainerInfos>
        </SectionLine>

        <SectionTech />
      </main>
    </>
  );
};
