import { useState } from "react";
import "./style.css";
import Counter from "../../components/Counter/index";
import Button from "../../components/Button/index";

const cronometerModel = {
  hour: 0,
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
};

const Cronometer = () => {
  const [clock, setClock] = useState(cronometerModel);
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stopedTimer, setStopedTimer] = useState([]);
  // Estado para controlar o set Interval
  const [interval, setInter] = useState(null);
  //?Principal diferença entre o setInterval e o setTimeout
  //! setInterval executa repetidamente a função passada em seu primeiro parametro depois da quantidade de tempo passada
  //! setTimeOut executa apenas uma vez a função passada em seu primeiro parametro depois da quantidade de tempo passada

  function init() {
    setStart(true);

    setInter(
      setInterval(() => {
        setClock((clockData) => {
          let hour = clockData.hour;
          let minutes = clockData.minutes;
          let seconds = clockData.seconds;
          let miliseconds = clockData.miliseconds;

          if (miliseconds === 1000) {
            miliseconds = 0;
            seconds++;
          }

          if (seconds === 60) {
            miliseconds = 0;
            seconds = 0;
            minutes++;
          }

          if (minutes === 60) {
            hour++;
            minutes = 0;
            seconds = 0;
            miliseconds = 0;
          }

          return { hour, minutes, seconds, miliseconds: miliseconds + 1 };
        });
      }, 0)
    );
  }

  function pause() {
    setStart(false);
    console.log(interval);
    //! Limpa o intervalo, ou seja faz parar de repetir.
    clearInterval(interval);
  }

  function stop() {
    const stopedTimerCopy = stopedTimer.slice("");
    stopedTimerCopy.push(clock);

    clearInterval(interval);
    setStart(false);
    setClock(cronometerModel);
    setStopedTimer(stopedTimerCopy);
  }

  return (
    <div className="container">
      <Counter
        hour={clock.hour}
        minutes={clock.minutes}
        seconds={clock.seconds}
        miliseconds={clock.miliseconds}
      />

      {start ? (
        <Button onClick={pause}>Pause</Button>
      ) : (
        <Button onClick={init}>Start</Button>
      )}

      <Button onClick={stop}>Stop</Button>

      {stopedTimer.map((item, index) => (
        <p
          key={index}
        >{`${item.hour}:${item.minutes}:${item.seconds}:${item.miliseconds}`}</p>
      ))}
    </div>
  );
};

export default Cronometer;
