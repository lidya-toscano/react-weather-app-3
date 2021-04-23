import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <h5>
          <a
            href="https://github.com/lidya-toscano/react-weather-app"
            target="nonreferrer"
          >
            Open-Source Code
          </a>{" "}
          by{" "}
          <a href="https://www.lidyatoscano.com/" target="_blank">
            Lidya Toscano
          </a>
        </h5>
      </footer>
    </div>
  );
}
