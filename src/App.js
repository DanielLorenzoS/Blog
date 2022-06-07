import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Roadmap from "./roadmap/Roadmap";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
