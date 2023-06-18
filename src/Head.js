import logo from "./my-logo-nobg.png";
import "./App.css";
function Head() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" alt={"logo"} />
        <h1 className="myname"> Sai Vishnu xD lol </h1>
        <ul className="nav-list">
          <li> idk </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;