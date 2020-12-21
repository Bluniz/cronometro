import { useState } from "react";

const cronometerModel = {
  hour: 0,
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
};

export default function useCronometer() {
  const [clock, setClock] = useState(cronometerModel);
  const [start, setStart] = useState(false);
  const [parcials, setParcials] = useState([]);
  // Estado para controlar o set Interval
  const [interval, setInter] = useState(null);
  //?Principal diferença entre o setInterval e o setTimeout
  //! setInterval executa repetidamente a função passada em seu primeiro parametro depois da quantidade de tempo passada
  //! setTimeOut executa apenas uma vez a função passada em seu primeiro parametro depois da quantidade de tempo passada

  const stopButtonDisableCondition =
    clock.hour === 0 &&
    clock.minutes === 0 &&
    clock.seconds === 0 &&
    clock.miliseconds === 0;

  function init() {
    setStart(true);
    if (clock === cronometerModel) setParcials([]);

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

          return { hour, minutes, seconds, miliseconds: miliseconds + 10 };
        });
      }, 10)
    );
  }

  function pause() {
    setStart(false);
    //! Limpa o intervalo, ou seja faz parar de repetir.
    clearInterval(interval);
  }

  function stop() {
    clearInterval(interval);
    setStart(false);
    setClock(cronometerModel);
  }

  function getParcial() {
    parcials.push(clock);
  }

  return {
    clock,
    init,
    pause,
    stop,
    getParcial,
    stopButtonDisableCondition,
    parcials,
    start,
  };
}
