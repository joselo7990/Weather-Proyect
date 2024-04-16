import moment from "moment-timezone";
import "moment/locale/es";
import weatherPhotos from "../helpers/helpers";

function Card({ objeto }) {
  console.log(objeto);
  return (
    <div className="w-max h-max overflow-hidden shadow-lg  bg-customColor mt-2">
      {objeto && objeto.dt && (
        <h3 className="text-center text-customLetters text-2xl">
          {moment(objeto.dt_txt).format("LLLL").split(",")[0]}
        </h3>
      )}
      {objeto &&
        objeto.weather &&
        objeto.weather[0] &&
        objeto.weather[0].main && (
          <img
            className="mx-auto h-24 w-24"
            src={weatherPhotos(objeto.weather[0].main)}
            alt="Nubes"
          ></img>
        )}
      <div className="flex justify-center mt-12 text-customLetters">
        {objeto &&
          objeto.weather &&
          objeto.weather[0] &&
          objeto.weather[0].main && (
            <h1 className="font-sans text-2xl">{objeto.weather[0].main}</h1>
          )}
      </div>

      <div className="flex justify-center  text-customLetters">
        {objeto && objeto.main && objeto.main.feels_like && (
          <h1 className="font-sans text-xl">
            {(objeto.main.feels_like - 273.15).toFixed(0)} °C
          </h1>
        )}
      </div>
      <div className="flex justify-center  mt-0 text-customLetters">
        {objeto && objeto.main && objeto.main.humidity && (
          <h1 className="font-sans text-xl">
            humidity {objeto.main.humidity} %
          </h1>
        )}
      </div>
    </div>
  );
}

export default Card;
