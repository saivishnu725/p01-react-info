import logo from "../assets/images/my-logo-nobg.png";
function Head() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" alt={"logo"} />
        <h1 className="myname"> Sai Vishnu xD lol </h1>
        <ul className="nav-list">
          {/* <li>
            <button type="button"> idk </button>{" "}
          </li> */}
          <li>
            <button type="button"> About (WIP) </button>{" "}
          </li>
          <li>
            <button type="button"> Contact (WIP) </button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;
