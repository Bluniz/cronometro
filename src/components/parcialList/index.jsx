import "./style.css";

const ParcialList = ({ parcials }) => (
  <div className="parcial-container">
    {parcials.map((item, index) => (
      <p key={index} className="parcial">{`${index + 1} - ${item.hour}:${
        item.minutes
      }:${item.seconds}:${item.miliseconds}`}</p>
    ))}
  </div>
);

export default ParcialList;
