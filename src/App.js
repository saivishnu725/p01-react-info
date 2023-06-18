import "./App.css";
import Head from "./Head.js";
import Foot from "./Foot.js";
import List from "./List.js";

const title = <h1 className="title"> Fun facts about React </h1>;

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