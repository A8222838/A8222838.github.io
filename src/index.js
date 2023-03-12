import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import HomePage from "./pages/homePage";
import Projects from "./pages/projects";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/front-end/" element={<HomePage />} />
        <Route exact path="/front-end/about/" element={<About />} />
        <Route exact path="/front-end/projects" element={<Projects />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
