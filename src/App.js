import logo from "./logo.svg";
import "./App.css";

function Head() {
  return (
    <header>
      <nav>
        <img src={logo} width="40px" alt={"logo"} />
      </nav>
    </header>
  );
}

const title = <h1 className="title"> Fun facts about React </h1>;

function List() {
  return (
    <ul>
      <li> was first released in 2013 </li>
      <li> was originally created by Jordan Walke </li>
      <li> has well over 200k stars on Github </li>
      <li> is maintained by Facebook </li>
      <li> powers thousands of enterprise apps, including mobile apps </li>
    </ul>
  );
}

function Foot() {
  return (
    <footer>
      ©2023 Sai Vishnu Development. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div>
      <Head />
      {title}
      <List />
      <Foot />
    </div>
  );
}

export default App;
