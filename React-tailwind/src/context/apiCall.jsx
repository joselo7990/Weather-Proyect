import { createContext, useState, useEffect } from "react";

export const WeaherContext = createContext();

const WeaherContextProvider = ({ children }) => {
  // Logica del contexto
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Montevideo");

  useEffect(() => {
    async function fetchData() {
      const apiKey = "d98e86000b15fee3e9aa359bf6104449";

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const toJson = await response.json();

        setWeather(toJson);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchData();
  }, [city]);

  return (
    <WeaherContext.Provider value={{ weather, setCity }}>
      {children}
    </WeaherContext.Provider>
  );
};

export default WeaherContextProvider;
