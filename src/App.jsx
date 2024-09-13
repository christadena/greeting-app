import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["red", "green", "blue", "orange", "purple", "yellow"]; // Array of colors

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);


    // Change color every second
    const colorChangeId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => {
      clearInterval(timerId);
      clearInterval(colorChangeId);
    };
  }, []);

  const currentHour = time.getHours();
  const currentMinutes = time.getMinutes();
  const currentSeconds = time.getSeconds();

  let greeting;


  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good evening";
  }

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[time.getDay()];
  const whatDay = " Today is " + currentDay;
  return (
    <div className="App">
      <h1 className="heading" style={{ color: colors[colorIndex] }}>
        {greeting}
      </h1>
      <p>{whatDay}</p>
      <p className="time">
        Current Time: {currentHour.toString().padStart(2, "0")}:
        {currentMinutes.toString().padStart(2, "0")}:
        {currentSeconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default App;
