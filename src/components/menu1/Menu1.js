import Button from "../button/Button";
// import img from "./search.svg";
import { ReactComponent as Icon } from "./search.svg";

export default function Menu1() {
  return (
    <div className="topMenu">
      <h1>slalom</h1>
      <div className="right">
        <Button text="let's talk" />
        {/* <img className="icon" src={img} /> */}
        <Icon className="icon" fill="white" stroke="white" />
        <p>english</p>
      </div>
    </div>
  );
}
