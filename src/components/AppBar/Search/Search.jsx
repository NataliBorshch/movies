import Icon from "../../Icon";
import "./Search.scss";

const Search = () => {
  return (
    <div className="header-search">
      <input className="header-input" placeholder="film search" />
      <Icon icon="search" size={25} color="#7a63ff" className="icon-search" />
    </div>
  );
};

export default Search;
