import { Component } from "react";

import ApiService from "../service/api";
const fullUrlImage = "https://image.tmdb.org/t/p/w500";

class ActorsPage extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const data = await ApiService.getPopularActors();
    console.log(data.results);
    this.setState({ actors: [...data.results] });
  }

  render() {
    return (
      <>
        <h3>Actors</h3>
        <ul>
          {this.state.actors.map((item) => {
            return (
              <li>
                <img src={`${fullUrlImage}${item.profile_path}`} width="100" />
                <h3>{item.name}</h3>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ActorsPage;
