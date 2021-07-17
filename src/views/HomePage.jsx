import { useEffect } from "react";
import { useState } from "react";

import "../styles/homePage.scss";
import api from "../service/api";
const fullUrlImage = "https://image.tmdb.org/t/p/w500";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getTrending()
      .then(({ results }) => {
        return setTrending(results);
      })
      .catch((error) => setError(error));
  }, []);

  console.log(trending);
  return (
    <>
      <div className="home-page">
        <div className="home-form">
          <div className="home-box1"></div>
          <div className="home-box-btn">
            <button className="home-btn">sing up</button>
            <button className="home-btn">come back</button>
          </div>
        </div>
        <div className="home-box2">
          <ul className="home-slider">
            {trending.map((item) => {
              return (
                <li className="home-card">
                  <h3>{item.title}</h3>
                  <img
                    src={`${fullUrlImage}${item.poster_path}`}
                    alt="poster"
                    className="poster"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
