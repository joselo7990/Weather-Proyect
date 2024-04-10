import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Body from "./components/Body";
import SearchPlaces from "./components/SearchPlaces";
import WeaherContextProvider from "./context/apiCall";

function App() {
  const [places, setPlaces] = useState(true);
  function changePlaces(places) {
    setPlaces(!places);
  }

  return (
    <WeaherContextProvider>
      <div className="flex flex-col md:flex-row ">
        {places == true ? (
          <Hero changePlaces={changePlaces} places={places} />
        ) : (
          <SearchPlaces changePlaces={changePlaces} places={places} />
        )}

        <div className="flex-1 md:order-last">
          <Body />
        </div>
      </div>
    </WeaherContextProvider>
  );
}

export default App;
