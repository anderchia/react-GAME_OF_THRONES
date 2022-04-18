import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const GoTcontext = createContext();

export const GoTcontextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [characters, setCharacters] = useState([]);
  const url = "https://api.got.show/api/show/characters/";

  useEffect(() => {
    const fetchCharacters = async (name = "") => {
      const res = await axios.get(`${url}/${name}`);

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
      value={{ houses, setHouses, characters, setCharacters }}
    >
      {children}
    </GoTcontext.Provider>
  );
};
