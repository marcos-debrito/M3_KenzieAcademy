import { GlobalStyle } from "./styles/GlobalStyle";
import { RoutesMain } from "./routes/RoutesMain";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Loader } from "./styles/GlobalLoader";

export const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      {loading ? <Loader /> : <RoutesMain />}
    </>
  );
};
