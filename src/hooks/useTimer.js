import { useState } from "react";

const useTimer = () => {
  const [timers, setTimers] = useState([]);
  const [start, setStart] = useState(false);
  const [save, setSave] = useState(false);
  const [actualTimer, setActualTimer] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });
  const [interval, setInter] = useState(null);
  const [type, setType] = useState(null);

  function pause() {
    setStart(false);
    clearInterval(interval);
  }

  function handleChangeType() {
    setSave(true);

    setType("timer");
  }

  function addTimers() {
    const timersCopy = timers.splice("");
    timersCopy.push(actualTimer);
    setTimers(timersCopy);
    setType(null);
    setSave(false);
  }

  function handleAdd(data) {
    setActualTimer({
      hour: data.hour,
      minutes: data.minutes,
      seconds: data.seconds,
    });
    clearInterval(interval);
  }

  function init() {
    setStart(true);
    setSave(false);
    setType(null);
    setInter(
      setInterval(() => {
        setActualTimer((time) => {
          let hour = time.hour;
          let minutes = time.minutes;
          let seconds = time.seconds;

          if (seconds - 1 < 0 && minutes !== 0) {
            minutes = minutes - 1;
            seconds = 59;
          }

          if (minutes - 1 < 0 && hour !== 0) {
            hour = hour - 1;
            minutes = 59;
          }

          if (hour === 0 && minutes === 0 && seconds === 0) {
            hour = 0;
            seconds = 0;
            minutes = 0;
            clearInterval(interval);
            setStart(false);
            return { hour, minutes, seconds: seconds };
          }

          return { hour, minutes, seconds: seconds - 1 };
        });
      }, 1000)
    );
  }

  function handleUp(name, value) {
    let data = value + 1;

    if (name === "hour" && data === 24) data = 0;

    if (name === "minutes" && data === 60) data = 0;

    if (name === "seconds" && data === 60) data = 0;

    setActualTimer((dados) => {
      return { ...dados, [name]: data };
    });
  }

  function handleDown(name, value) {
    let data = value - 1;
    console.log(name);

    if (name === "hour" && data < 0) data = 23;

    if (name === "minutes" && data < 0) data = 59;

    if (name === "seconds" && data < 0) data = 59;

    setActualTimer((dados) => {
      return { ...dados, [name]: data };
    });
  }

  return {
    start,
    save,
    actualTimer,
    timers,
    init,
    pause,
    handleUp,
    handleDown,
    handleChangeType,
    addTimers,
    handleAdd,
    type,
  };
};


export default useTimer;