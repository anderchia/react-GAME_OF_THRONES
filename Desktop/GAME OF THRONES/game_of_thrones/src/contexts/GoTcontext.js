import axios from "axios";
const { createContext, useState, useEffect } = require("react");


export const GoTocontext = createContext();


export const GoTocontextProvider = ({ children }) => {
 
  const [houses, setHouses] = useState([]);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
   
    const fetchCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
     
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    
    const fetchHouses = async () => {
      const res = await axios.get(
        "https://api.got.show/api/show/houses"
      );
      setHouses(res.data);
    
    };
    fetchHouses();
}, []);
    return (
        //
        <GoTocontext.Provider
          // Estos son los valores a los que tendrán acceso a través del useContext los "children", o, componentes anidados en la etiqueta del Provider
          value={{ houses, setHouses, setCharacters, characters }}
        >
          {children}
        </GoTocontext.Provider>
      );
    };