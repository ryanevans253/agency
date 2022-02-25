import Menu1 from "../menu1/Menu1";
import Menu2 from "../menu2/Menu2";
import video from "./nature.mp4";

export default function Hero() {
  return (
    <div>
      <video muted loop autoPlay className={`heroVideo`}>
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="hero">
        <div> */}
      <div className="hero">
        <Menu1 />
        <Menu2 />
        {/* </div> */}
        <h1 className="redefine">
          Redefine what's
          <br /> possible
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
}
