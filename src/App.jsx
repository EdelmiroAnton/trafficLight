import { useState } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState(0);

  setTimeout(() => {
    setLight(light + 1);
    if (light >= 3) setLight(1);
  }, 1000);

  return (
    <>
      <div className="trafficLight">
        <div className={`light ${light === 1 ? "light-red" : "grey"} `}></div>
        <div className={`light ${light === 2 ? "light-yellow" : "grey"}`}></div>
        <div className={`light ${light === 3 ? "light-green" : "grey"}`}></div>
      </div>
    </>
  );
}

export default App;
