import logo from "./logo.svg";
import "./App.css";
import Comment from "./Comment";

const comments = [
  { name: "JeongTaesu", content: "hi" },
  { name: "Taesuuu", content: "bye" },
  { name: "taesu", content: "hi" },
];

function App() {
  return (
    <div className="App" style={{ padding: 16, backgroundColor: "#282c34" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Comment name={"JenogTaesu"} content={"hi"} />
      <Comment name={"Taesuuu"} content={"bye"} />
      {/* <div>
        {comments.map((comment, index) => {
          return (
          <Comment 
            name={comment.name} 
            content={comment.content} 
              />
          )
        })};
      </div> */}
    </div>
  );
}

export default App;
