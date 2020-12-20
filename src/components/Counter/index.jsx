import "./style.css";

const Counter = ({ hour, minutes, seconds, miliseconds }) => (
  <div className="counter-container">
    <div className="time-container">
      <h1>{hour}</h1>
      <h2>Horas</h2>
    </div>
    <div className="time-container">
      <h1>{minutes}</h1>
      <h2>minutos</h2>
    </div>
    <div className="time-container">
      <h1>{seconds}</h1>
      <h2>segundos</h2>
    </div>
    <div className="time-container">
      <h1>{miliseconds}</h1>
      <h2>milisegundos</h2>
    </div>
  </div>
);

export default Counter;
