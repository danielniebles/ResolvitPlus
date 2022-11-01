import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MovieCard />
    </div>
  );
}

export default App;
