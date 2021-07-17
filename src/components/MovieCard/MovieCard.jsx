import "./MovieCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { moviesOperations } from "../../redux/movie";
import React, { useState, useEffect, useCallback } from "react";
import genresOperation from "../../redux/genres/genres-operation";
import genresSelector from "../../redux/genres/genres-selector";

const fullUrlImage = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ item, genres }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(genresOperation.getAllGenres());
  // }, [dispatch]);
  // console.log(item.genre_ids.slice(0, 2));
  const y = item.genre_ids.slice(0, 2);
  // console.log(genres);
  const x = genres.filter(({ id }) => id === y[0] || id === y[1]);
  console.log(x);
  return (
    <div className="card">
      <img
        src={`${fullUrlImage}${item.poster_path}`}
        className="poster"
        alt="poster"
      />
      <p className="card-vote">{`${
        !Number.isInteger(item.vote_average)
          ? item.vote_average
          : item.vote_average + ".0"
      }`}</p>
      <p className="card-date">
        {`${item.release_date ? item.release_date : item.first_air_date}`.slice(
          0,
          4
        )}
      </p>

      <h3 className="card-title">{item.title ? item.title : item.name}</h3>
      <span>{x && x.map((genre) => <p>{genre.name}</p>)}</span>
    </div>
  );
};

export default MovieCard;
