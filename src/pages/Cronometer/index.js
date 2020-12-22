import "./style.css";
import Counter from "../../components/Counter/index";
import Button from "../../components/Button/index";
import ParcialList from "../../components/parcialList/index";
import useCronometer from "../../hooks/useCronometer";

const Cronometer = () => {
  const {
    clock,
    init,
    start,
    pause,
    stop,
    stopButtonDisableCondition,
    getParcial,
    parcials,
  } = useCronometer();

  return (
    <div className="container">
      <br />
      <Counter
        hour={clock.hour}
        minutes={clock.minutes}
        seconds={clock.seconds}
        miliseconds={clock.miliseconds}
        type="counter"
      />

      <div className="button-group">
        <Button onClick={init} disabled={start} media="play" />

        <Button onClick={pause} disabled={!start} media="pause" />
        <Button
          onClick={stop}
          media="stop"
          disabled={stopButtonDisableCondition}
        />
        <Button onClick={getParcial} disabled={!start} media="parcial" />
      </div>

      <ParcialList parcials={parcials} />
    </div>
  );
};

export default Cronometer;
