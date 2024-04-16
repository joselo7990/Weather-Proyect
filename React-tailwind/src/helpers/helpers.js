function weatherPhotos(str) {
  const weatherImages = {
    Clear: "/imagenes/Clear.png",
    Rain: "/imagenes/LightRain.png",
    Sleat: "/imagenes/Sleet.png",
    Clouds: "/imagenes/HeavyCloud.png",
  };

  return weatherImages[str];
}

export default weatherPhotos;
