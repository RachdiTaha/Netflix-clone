import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import request from "../config/Request";
import InfoIcon from "@material-ui/icons/Info";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lenght - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Titre</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor
          facilis beatae recusandae veniam nesciunt? Vero quo quos vel
          temporibus!...
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon /> lecture
          </button>
          <button className="banner__button">
            <InfoIcon /> Plus dinfos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
