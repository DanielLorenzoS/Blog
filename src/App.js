import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Roadmap from "./roadmap/Roadmap";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import { Route, Routes } from "react-router-dom";
/* import Terminal from "./roadmap/roadmaps/terminal/Terminal";
import Html from "./roadmap/roadmaps/html/Html";
import Css from "./roadmap/roadmaps/css/Css";
import Javascript from "./roadmap/roadmaps/javascript/Javascript";
import Reactjs from "./roadmap/roadmaps/react/Reactjs";
import Java from "./roadmap/roadmaps/java/Java";
import Spring from "./roadmap/roadmaps/spring/Spring";
import Python from "./roadmap/roadmaps/python/Python";
import Mysql from "./roadmap/roadmaps/mysql/Mysql"; */

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/terminal" element={<Terminal />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/css" element={<Css />}></Route>
        <Route path="/javascript" element={<Javascript />}></Route>
        <Route path="/react" element={<Reactjs />}></Route>
        <Route path="/java" element={<Java />}></Route>
        <Route path="/spring" element={<Spring />}></Route>
        <Route path="/python" element={<Python />}></Route>
        <Route path="/mysql" element={<Mysql />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
