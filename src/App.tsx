//import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import PaperComponent from "./components/PaperComponent";
import TypographyComponent from "./components/TypographyComponent";
import BoxComponent from "./components/BoxComponent";
import DividerComponent from "./components/DividerComponent";
import LinkComponent from "./components/LinkComponent";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MuiLink from "./components/LinkComponent";
import { green } from "@mui/material/colors";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box>
          <MuiLink />
          <Box height="100px" border={4} borderColor="green">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>

      <ButtonComponent></ButtonComponent>
      <TypographyComponent></TypographyComponent>
      <BoxComponent></BoxComponent>
      <DividerComponent></DividerComponent>
      <PaperComponent></PaperComponent>
    </>
  );
}

export default App;
