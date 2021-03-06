import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { GoTcontextProvider } from "./contexts/GoTcontext";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import Characters from "./pages/Characters/Characters";
import Cronology from "./pages/Cronology/Cronology";
import Home from "./pages/Home/Home.jsx";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import Houses from "./pages/Houses/Houses";

function App() {
  return (
    <Router>
    
      <GoTcontextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/characters" element={<Characters />} />

          <Route path="/characters/:name" element={<CharacterDetails />} />

          <Route path="/houses" element={<Houses />} />

          <Route path="/houses/:name" element={<HouseDetails />} />

          <Route path="/cronology" element={<Cronology />} />
        </Routes>
      </GoTcontextProvider>
    </Router>
  );
}

export default App;
