import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkmode, Setdarkmode] = useState(false);
  const toggleDarkMode = () => {
    Setdarkmode(!darkmode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export  { DarkModeContext, DarkModeProvider };
