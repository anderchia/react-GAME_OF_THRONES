import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const GoTcontext = createContext();

export const GoTcontextProvider = ({ children }) => {
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
      const res = await axios.get("https://api.got.show/api/show/houses");

      setHouses(res.data);
    };

    fetchHouses();
  }, []);
  
  return (
    <GoTcontext.Provider
      value={{ houses, setHouses, setCharacters, characters }}
    >
      {children}
    </GoTcontext.Provider>
  );
};
