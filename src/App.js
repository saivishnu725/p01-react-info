import "./App.css";
import Head from "./components/Head.js";
import Foot from "./components/Foot.js";
import List from "./components/List.js";

const title = <h1 className="title"> Fun facts about me </h1>;

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