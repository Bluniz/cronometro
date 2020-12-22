import "./style.css";
import arrowUpIcon from "../../assets/arrowTop.svg";
import arrowDownIcon from "../../assets/arrowDown.svg";

const Counter = ({
  hour,
  minutes,
  seconds,
  miliseconds,
  type,
  handleUp,
  handleDown,
}) => (
  <div className="counter-container">
    <div className="time-container">
      {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleUp("hour", hour);
          }}
        >
          <img src={arrowUpIcon} alt="icons" />
        </button>
      )}

      <h1>{hour <= 9 ? "0" + hour : hour}</h1>
      <h2>Horas</h2>
      {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleDown("hour", hour);
          }}
        >
          <img src={arrowDownIcon} alt="icons" />
        </button>
      )}
    </div>
    <div className="time-container">
      {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleUp("minutes", minutes);
          }}
        >
          <img src={arrowUpIcon} alt="icons" />
        </button>
      )}
      <h1>{minutes <= 9 ? "0" + minutes : minutes}</h1>
      <h2>minutos</h2>
      {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleDown("minutes", minutes);
          }}
        >
          <img src={arrowDownIcon} alt="icons" />
        </button>
      )}
    </div>
    <div className="time-container">
    {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleUp("seconds", seconds);
          }}
        >
          <img src={arrowUpIcon} alt="icons" />
        </button>
      )}
      <h1>{seconds <= 9 ? "0" + seconds : seconds}</h1>
      <h2>segundos</h2>
      {type === "timer" && (
        <button
          className="img-btn"
          onClick={() => {
            handleDown("seconds", seconds);
          }}
        >
          <img src={arrowDownIcon} alt="icons" />
        </button>
      )}
    </div>

    {type === "counter" && (
      <div className="time-container">
        <h1>{miliseconds}</h1>
        <h2>milisegundos</h2>
      </div>
    )}
  </div>
);

export default Counter;
