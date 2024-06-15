import "./App.css";
import {DarkModeProvider} from "./Components/Darkmode/DarkModeContext"
import Container from "./Components/Darkmode/Container";


function App() {
  return (
    <>
      <div className="app">
        <DarkModeProvider>
          <Container/>
        </DarkModeProvider>
      </div>
      
    </>
  );
}

export default App;
