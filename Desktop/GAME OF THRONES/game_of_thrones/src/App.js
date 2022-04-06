
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navigator from './components/Navigator/Navigator';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import Characters from './pages/Characters/Characters';
import Cronology from './pages/Cronology/Cronology';
import Home from "./pages/Home/Home.jsx";
import HouseDetails from './pages/HouseDetails/HouseDetails';
import Houses from './pages/Houses/Houses';


function App() {
  return (
    <Router>
     <Navigator/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/characters" element={<Characters/>}/>
       <Route path="/characters/:id" element={<CharacterDetails/>}/>
       <Route path="/houses" element={<Houses/>}/>
       <Route path="/houses/:id" element={<HouseDetails/>}/>
       <Route path="/cronology" element={<Cronology/>}/>



     </Routes>


    </Router>
  )
}

export default App;
