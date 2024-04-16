import Card from "./Card";
import DegreesCard from "./DegreesCard";
import TodayCard from "./TodayCard";
import { WeaherContext } from "../context/apiCall";
import { useContext } from "react";
import moment from "moment-timezone";
import "moment/locale/es";

function Body() {
  const { weather } = useContext(WeaherContext);

  // Verifica si weather.list existe y tiene al menos 40 objetos
  const weatherList =
    weather && weather.list && weather.list.length >= 40 ? weather.list : [];

  // Tomo el primer objeto
  const objetosAMostrar = [weatherList[0]];
  for (let i = 1; i < weatherList.length; i += 13) {
    if (weatherList[i]) {
      // Verifica si el objeto existe
      objetosAMostrar.push(weatherList[i]);
    }
  }

  return (
    <div className=" bg-customBody py-12 px-12">
      <div className="lg:block hidden mr-12">
        <DegreesCard></DegreesCard>
      </div>
      {weather && weather.city && weather.city.name && (
        <div className="flex justify-center mt-5 ">
          <h4 className="font-sans text-customLetters text-4xl hidden sm:block">
            City Name: {weather.city.name}
          </h4>
        </div>
      )}

      <div className="grid lg:grid-cols-4 grid-cols-2 mt-20 ml-8 mr-8">
        {objetosAMostrar.map((objeto) => (
          <Card key={crypto.randomUUID()} objeto={objeto} />
        ))}
      </div>
      <div>
        <h1 className="font-sans text-customLetters text-5xl mt-20 ml-10">
          Today's Highlights
        </h1>
        <div className="grid grid-cols-2 gap-4 place-items-center mr-8">
          {objetosAMostrar.map((objeto) => (
            <TodayCard key={crypto.randomUUID()} objeto={objeto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
