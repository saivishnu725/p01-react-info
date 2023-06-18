import logo from "./logo.svg";
import "./App.css";
import "./Head.js";

const title = <h1 className="title"> Fun facts about React </h1>;

function List() {
  return (
    <ul className="list">
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
    <footer className="footer">
      <small> ©2023 saivishnu725 Development. All rights reserved. </small>
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
