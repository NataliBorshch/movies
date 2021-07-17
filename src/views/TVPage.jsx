import MoviesList from "../components/MoviesList/MoviesList";
import { TVSelectors, TVOperations } from "../redux/tv";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TVPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TVOperations.getPopularTV());
  }, [dispatch]);
  const tv = useSelector(TVSelectors.getPopularTV);
  console.log(tv);

  return (
    <>
      <h3>TV</h3>
      <MoviesList items={tv} />
    </>
  );
}

export default TVPage;
