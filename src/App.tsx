//import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import PaperComponent from "./components/PaperComponent";
import TypographyComponent from "./components/TypographyComponent";
import BoxComponent from "./components/BoxComponent";
import DividerComponent from "./components/DividerComponent";
import LinkComponent from "./components/LinkComponent";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MuiLink from "./components/LinkComponent";
import { green } from "@mui/material/colors";
import LayoutComponent from "./components/LayoutComponent";
import LeftPage from "./pages/LeftPage";
import RightPage from "./pages/RightPage";

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

      <BrowserRouter>
        <Link to={"LeftPage"}>Left Page | </Link>
        <Link to={"CenterPage"}>Center Page | </Link>
        <Link to={"RightPage"}>Right Page | </Link>
        <Link to={"/"}>Home</Link>
        <LayoutComponent>
          <Routes>
            <Route index element={<LeftPage />}></Route>
            <Route path={"/LeftPage"} element={<LeftPage />}></Route>
            <Route path={"/RightPage"} element={<RightPage />}></Route>
          </Routes>
        </LayoutComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
