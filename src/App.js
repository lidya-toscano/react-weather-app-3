import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="San Diego" />
      <footer>
        <h5>
          <a
            href="https://github.com/lidya-toscano/react-weather-app-3"
            target="nonreferrer"
          >
            Open-Source Code
          </a>{" "}
          by{" "}
          <a href="https://www.lidyatoscano.com/" target="nonreferrer">
            Lidya Toscano
          </a>
        </h5>
      </footer>
    </div>
  );
}
