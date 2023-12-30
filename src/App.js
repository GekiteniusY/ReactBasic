// import logo from "./logo.svg";
import "./App.css";
import { Article, TextInput, Counter } from "./component/index";

function App() {
  return (
    <>
      <div>
        <Article
          title={"新・日本一わかりやすいReact入門1"}
          content={"今日のトピックはpropsについて"}
        />
        <TextInput />
        <Counter />
      </div>
    </>
  );
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
