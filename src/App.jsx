import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
