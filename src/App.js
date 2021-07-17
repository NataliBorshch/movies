import { Route, Switch, Redirect } from "react-router";
import AppBar from "./components/AppBar";
import { useDispatch, useSelector } from "react-redux";
import router from "./router";
import Container from "./components/Container";
import Footer from "./components/Footer";
import React, { lazy, Suspense, useEffect } from "react";
import genresOperations from "./redux/genres/genres-operation";
import axios from "axios";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const TVPage = lazy(() =>
  import("./views/TVPage" /* webpackChunkName: "TVPage" */)
);
const ActorsPage = lazy(() =>
  import("./views/ActorsPage" /* webpackChunkName: "ActorsPage" */)
);

// const apiKey = "api_key=42c4fa9c05708253e8c2f9a05f447e85";

// const baseURL = "https://api.themoviedb.org";
// const getGenres = () => {
//   const poin = "/3/genre/movie/list?";
//   const url = `${baseURL}${poin}${apiKey}&language=en-US`;
//   axios.get(url).then((res) => console.log(res.data));
// };

// const getGenres = () => {
//   const poin = "/3/genre/movie/list?";
//   const url = `${baseURL}${poin}${apiKey}&language=en-US`;
//   axios.get(url).then((res) => console.log(res.data.genres));
// };

// getGenres();

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <AppBar />
          <Switch>
            <Route exact path={router.home} component={HomePage} />
            <Route path={router.movies} component={MoviesPage} />
            <Route path={router.tv} component={TVPage} />
            <Route path={router.actors} component={ActorsPage} />
            <Redirect to={router.home} />
          </Switch>
          <Footer />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
