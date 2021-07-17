import Navigation from "./Navigation";
import "./AppBar.scss";
import Search from "./Search";
import Icon from "../Icon";

const AppBar = () => {
  return (
    <header>
      <img
        className="img-logo"
        src="https://ik.imagekit.io/s2fpg15d4rx/2021-06-07__4__9TlaS8ztKPr.png"
        alt="logo-planet"
      />
      <Search />
      <Navigation />
      <Icon icon="user" size={40} color="white" className="header-icon" />
    </header>
  );
};

export default AppBar;
