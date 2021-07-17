import { useSelector, useDispatch } from "react-redux";
import { moviesOperations } from "../../redux/movie";
import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../MovieCard";
import "./MoviesList.scss";
import genresOperation from "../../redux/genres/genres-operation";
import genresSelector from "../../redux/genres/genres-selector";

const MoviesList = ({ items }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(genresOperation.getAllGenres());
  }, [dispatch]);
  console.log(items);

  const genres = useSelector(genresSelector.genres);
  console.log(genres);
  return (
    <div>
      <ul className="movies-list">
        {items.map((item) => {
          return (
            <li className="movie-card">
              {/* <NavLink path="/"> */}
              <MovieCard item={item} genres={genres} />
              {/* </NavLink> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
