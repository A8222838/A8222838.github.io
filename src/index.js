import ReactDOM from "react-dom";
import { HashRouter,Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import HomePage from "./pages/homePage";
import Projects from "./pages/projects";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename='/front-end'>
    <Layout>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about/" element={<About />} />
        <Route exact path="/projects/" element={<Projects />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
