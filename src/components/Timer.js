import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let interval;

    // If not paused, then continue running the timer
    if (!isPaused) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // If Timer Expires
    if (timer === 0) {
      setIsPaused(true);
      if (isBreak) {
        setTimer(25 * 60); // Reset to 25 minutes
      } else {
        setTimer(5 * 60); // Start a 5-minute break
      }
      setIsBreak(!isBreak);
    }

    return () => clearInterval(interval);
  }, [timer, isBreak, isPaused]);

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  // Start and Pause Timer
  const handleStartPause = () => {
    setIsPaused((prev) => !prev);
  };

  // Reset Functionality
  const handleReset = () => {
    setIsPaused(true);
    setTimer(25 * 60);
    setIsBreak(false);
  };

  return (
    <div className="timer">
      <h2>Hello, {userName} 👋</h2>
      <h1 className="timer__title">{isBreak ? "Break Time" : "Hustle Time"}</h1>
      {/* Timer Component */}
      <TimerContent
        timer={timer}
        handleStartPause={handleStartPause}
        handleReset={handleReset}
        isPaused={isPaused}
      />
    </div>
  );
};

// TIMER CONTENT
const TimerContent = ({ timer, handleStartPause, handleReset, isPaused }) => {
  return (
    <div className="timer__content">
      <p className="timer__time">
        {Math.floor(timer / 60)
          .toString()
          .padStart(2, "0")}
        :{(timer % 60).toString().padStart(2, "0")}
      </p>
      <div className="btn__container">
        <button className="reset__btn" onClick={handleReset}>
          Reset
        </button>
        <button className="start__btn" onClick={handleStartPause}>
          {isPaused ? "Start" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
