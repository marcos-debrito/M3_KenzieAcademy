import { useState } from "react";
import { Feed } from "./pages/Feed/index.jsx";
import { GlobalStyles } from "./styles/global.js";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GlobalStyles />
      <Feed isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
};
