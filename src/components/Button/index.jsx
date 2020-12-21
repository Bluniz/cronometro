import "./style.css";

import PlayIcon from "../../assets/play.svg";
import PauseIcon from "../../assets/pause.svg";
import StopIcon from "../../assets/stop.svg";
import ParcialIcon from "../../assets/crono.svg";


const Button = ({ onClick, media, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {media === "play" && <img src={PlayIcon} alt="play_icon" />}
    {media === "pause" && <img src={PauseIcon} alt="play_icon" />}
    {media === "stop" && <img src={StopIcon} alt="play_icon" />}
    {media === "parcial" && <img src={ParcialIcon} alt="play_icon" />}
  </button>
);

export default Button;
