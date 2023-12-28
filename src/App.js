import logo from './logo.svg';
import './App.css';
import Article from './component/Article';

function App() {
    return (
    <>
        <div>
            <Article
                title={'新・日本一わかりやすいReact入門1'}
                content={'強のトピックはpropsについて'}
            />
            <Article
                title={'新・日本一わかりやすいReact入門2'}
                content={'強のトピックはpropsについて'}
            />
            <Article
                title={'新・日本一わかりやすいReact入門3'}
                content={'強のトピックはpropsについて'}
            />
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
