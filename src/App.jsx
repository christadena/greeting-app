import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  const currentHour = time.getHours();
  const currentMinutes = time.getMinutes();
  const currentSeconds = time.getSeconds();

  let greeting;
  let color;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good morning";
    color = "red";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
    color = "green";
  } else {
    greeting = "Good evening";
    color = "blue";
  }

  return (
    <div className="App">
      <h1 className="heading" style={{ color: color }}>
        {greeting}
      </h1>
      <p className="time">
        Current Time: {currentHour.toString().padStart(2, '0')}:
        {currentMinutes.toString().padStart(2, '0')}:
        {currentSeconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}


export default App;
