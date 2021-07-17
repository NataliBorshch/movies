// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";
import { moviesOperations, moviesSelectors } from "../redux/movie";
import React, { useEffect } from "react";

function MoviesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesOperations.getPopularMovies());
  }, [dispatch]);
  const movies = useSelector(moviesSelectors.getPopularMovies);
  return (
    <>
      <h1>movies</h1>
      <MoviesList items={movies} />
    </>
  );
}

export default MoviesPage;
