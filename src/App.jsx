import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate the angles for hour, minute, and second hands
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock face */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="2" />

      {/* Hour hand */}
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="55"
        transform={`rotate(${hourAngle}, 100, 100)`}
        stroke="black"
        strokeWidth="4"
      />

      {/* Minute hand */}
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="35"
        transform={`rotate(${minuteAngle}, 100, 100)`}
        stroke="black"
        strokeWidth="3"
      />

      {/* Second hand */}
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="25"
        transform={`rotate(${secondAngle}, 100, 100)`}
        stroke="red"
        strokeWidth="2"
      />

      {/* Center dot */}
      <circle cx="100" cy="100" r="3" fill="black" />
    </svg>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Clock />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
