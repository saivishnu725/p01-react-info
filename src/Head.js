import logo from "./logo.svg";

function Head() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" alt={"logo"} />
        <ul className="nav-list">
          <li> Pricing </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;