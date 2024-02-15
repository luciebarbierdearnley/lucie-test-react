import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <h1>Weather search engine</h1>
      <Search />
      <p>
        This project was coded by Lucie Barbier-Dearnley. Open-sourced on{" "}
        <a
          href="https://github.com/luciebarbierdearnley/react-weather-app"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
