import React from "react";
import Navegation from "./src/components/Navegation";
import { GlobalContextProvider } from "./src/context/GlobalProvider";

const App = () => {
  return (
    <GlobalContextProvider>
      <Navegation />
    </GlobalContextProvider>
  );
};

export default App;
