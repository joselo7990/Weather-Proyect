import background from "/imagenes/Cloud-background.png";
import lluvia from "/imagenes/HeavyRain.png";
import { WeaherContext } from "../context/apiCall";
import { useContext } from "react";
import moment from "moment-timezone";
import "moment/locale/es";
import weatherPhotos from "../helpers/helpers";

function Hero(props) {
  const { places, changePlaces } = props;
  const { weather } = useContext(WeaherContext);

  return (
    <>
      {weather && (
        <div className="w-full sm:w-1/4 top-0 left-0 bg-customColor">
          <div className="flex bg-slate-500 justify-between">
            <div className="mt-5 ml-5 inline-flex items-center bg-backHolder font-sans text-customLetters">
              <p
                className="text-white m-0"
                onClick={() => changePlaces(places)}
              >
                Search for places
              </p>
            </div>

            <div className="inline-flex items-center mr-5 mt-5">
              {weather &&
                weather.list &&
                weather.list[0] &&
                weather.list[0].weather &&
                weather.list[0].weather[0] &&
                weather.list[0].weather[0].main && (
                  <img
                    src={weatherPhotos(weather.list[0].weather[0].main)}
                    alt="fotoClima"
                    className="w-10 h-10"
                  />
                )}
            </div>
          </div>
          <div className="mt-20 relative">
            <img
              src={background}
              alt=""
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            {weather &&
              weather.list &&
              weather.list[0] &&
              weather.list[0].weather &&
              weather.list[0].weather[0] &&
              weather.list[0].weather[0].main && (
                <img
                  src={weatherPhotos(weather.list[0].weather[0].main)}
                  alt=""
                  className="absolute inset-0 m-auto"
                  style={{ zIndex: "1", width: "120px" }}
                />
              )}
          </div>
          <div className="flex justify-center mt-24 text-customLetters">
            {weather &&
              weather.list &&
              weather.list[0] &&
              weather.list[0].main && (
                <h1 className="font-sans text-7xl">
                  {(weather.list[0].main.feels_like - 273.15).toFixed(0)} °C
                </h1>
              )}
          </div>

          <div className="flex justify-center mt-5">
            {weather &&
              weather.list &&
              weather.list[0] &&
              weather.list[0].main && (
                <p className="text-customLetters text-xl">
                  humidity {weather.list[0].main.humidity} %
                </p>
              )}
          </div>
          <div className="flex justify-center mt-20">
            {weather &&
              weather.list &&
              weather.list[0] &&
              weather.list[0].weather &&
              weather.list[0].weather[0] && (
                <h1 className="font-sans text-3xl text-customLetters">
                  {weather.list[0].weather[0].main}
                </h1>
              )}
          </div>

          <div className="flex justify-center mt-12 text-customLetters">
            <h1 className="font-sans text-xl">Today ~</h1>
            {weather && weather.city && (
              <h1 className="font-sans text-xl">
                {moment(weather.list[0].dt_txt).format("MMM Do YY")}
              </h1>
            )}
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-customLetters text-3xl">{weather?.city?.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
