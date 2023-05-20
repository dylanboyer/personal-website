import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./NoPage";

const Main = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default Main;
