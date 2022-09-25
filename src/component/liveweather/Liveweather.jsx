//*************Live weather Compoenent****************//

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLiveWeather } from "../../slice/news";

function LiveWeather() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveLiveWeather());
  });

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="my-3 mt-5">
      <div className="card">
        <input
          type="text"
          className="form-control"
          placeholder="Search your live weather here..."
          value={inputCity}
          onChange={handleChangeInput}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>

        <div className="card-body">
          <h5 className="card-title"></h5>
          {Object.keys(data).length > 0 && (
            <div className="col-md-12 text-center mt-5">
              <div className="shadow rounded wetherResultBox">
                <div className="h-10 w-5">
                  <img
                    className="h-5 w-5"
                    src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                  />
                </div>

                <h5 className="weathorCity">{data?.name}</h5>
                <h6 className="weathorTemp">
                  {(data?.main?.temp - 273.15).toFixed(2)}°C
                </h6>
              </div>
            </div>
          )}
          <span className="badge rounded-pill text-bg-secondary"></span>
          <p className="card-text">
            <small className="text-muted"></small>
          </p>

          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default LiveWeather;
