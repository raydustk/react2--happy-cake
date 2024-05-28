import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App;