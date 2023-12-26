import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import PaperComponent from "./components/PaperComponent";
import TypographyComponent from "./components/TypographyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComponent></ButtonComponent>
      <PaperComponent></PaperComponent>
      <TypographyComponent></TypographyComponent>
    </>
  );
}

export default App;
