import { useState } from "react";
import Counter from "../../components/Counter";
import Button from "../../components/Button";
import useTimer from "../../hooks/useTimer";

import "./style.css";
const Timer = () => {
  const {
    timers,
    start,
    save,
    actualTimer,
    interval,
    type,
    pause,
    handleChangeType,
    addTimers,
    handleAdd,
    handleUp,
    handleDown,
    init,
  } = useTimer();

  return (
    <div className="container-timer">
      <br />
      <Counter
        hour={actualTimer.hour}
        minutes={actualTimer.minutes}
        seconds={actualTimer.seconds}
        type={type}
        handleUp={handleUp}
        handleDown={handleDown}
      />
      <div className="button-group">
        <Button media="play" onClick={init} disabled={start} />
        <Button media="pause" onClick={pause} disabled={!start} />
        <Button
          media="parcial"
          onClick={handleChangeType}
          disabled={type === "timer" || start}
        />
        {save && <Button media="save" onClick={addTimers} />}
      </div>

      <div className="timer-container">
        {timers.map((tempo, index) => (
          <p key={index} className="timer" onClick={() => handleAdd(tempo)}>{`${
            index + 1
          } - ${tempo.hour}:${tempo.minutes}:${tempo.seconds}`}</p>
        ))}
      </div>
    </div>
  );
};

export default Timer;
