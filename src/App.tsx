import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import PaperComponent from "./components/PaperComponent";
import TypographyComponent from "./components/TypographyComponent";
import BoxComponent from "./components/BoxComponent";
import DividerComponent from "./components/DividerComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComponent></ButtonComponent>

      <TypographyComponent></TypographyComponent>
      <BoxComponent></BoxComponent>
      <DividerComponent></DividerComponent>
      <PaperComponent></PaperComponent>
    </>
  );
}

export default App;
