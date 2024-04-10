import { useState, useContext } from "react";
import { WeaherContext } from "../context/apiCall";

function SearchPlaces(props) {
  const { places, changePlaces } = props;
  const [input, setInput] = useState("");
  const { setCity } = useContext(WeaherContext);
  const showInput = (e) => {
    e.preventDefault();
    setCity(input);
  };
  return (
    <div className="w-full sm:w-1/4 top-0 left-0 bg-customColor">
      <div className="flex-col bg-slate-500 justify-between">
        <form className="mt-5 ml-2 mr-2 inline-flex items-center bg-backHolder font-sans text-customLetters">
          <input
            type="text"
            placeholder="search location"
            className="bg-customColor border border-white"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <button
            className="bg-purple-500 text-white px-3 py-1"
            type="submit"
            onClick={(e) => {
              showInput(e);
              changePlaces(places);
            }}
          >
            Search
          </button>
          <button
            className="bg-purple-500 text-white px-2"
            type="button"
            onClick={() => changePlaces(places)}
          >
            Volver
          </button>
        </form>
        {/* <div className="ml-5 mt-5 font-sans text-customLetters text-xl">
          <h1 className="border border-white mt-1">London</h1>
          <h1 className="border border-white mt-1">Barcelona</h1>
          <h1 className="border border-white mt-1">Long Beach</h1>
        </div> */}
      </div>
    </div>
  );
}

export default SearchPlaces;
