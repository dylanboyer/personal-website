import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import NoPage from "./NoPage";

const Main = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default Main;
