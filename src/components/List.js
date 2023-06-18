function List() {
  return (
    <main>
      <ul className="list">
        <li> was first released in 2003 </li>
        <li> was created by my parents </li>
        <li>
          {" "}
          has well over 15 followers / 81 repositories (as of 18 June, 2023) on{" "}
          <a href="https://www.github.com/saivishnu725">Github</a>{" "}
        </li>
        <li> is a Computer Science geek </li>
        <li>
          hobbies:
          <ul className="hobbies">
            <li> Coding </li>
            <li> Reading </li>
            <li> Watching movies</li>
            <li> Staring at the wall </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

export default List;
