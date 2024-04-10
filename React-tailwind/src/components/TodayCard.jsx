function TodayCard({ objeto }) {
  return (
    <div className="w-72 h-40 bg-customColor font-sans text-customLetters mt-10 ml-10 flex justify-center">
      <div>
        <h3 className="font-sans text-2xl">Wind Status</h3>
        {objeto && objeto.wind && objeto.wind.speed && (
          <h1 className="font-sans text-5xl">
            {" "}
            {(objeto.wind.speed * 1.60934).toFixed(0)}
          </h1>
        )}

        <h3 className="font-sans text-2xl">Km/h</h3>
      </div>
    </div>
  );
}

export default TodayCard;
