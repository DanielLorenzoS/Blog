import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Portfolio from "./portfolio/Portfolio";
import MyRoadmap from "./roadmap/MyRoadmap";
import Contact from "./contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/roadmap" element={<MyRoadmap />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
