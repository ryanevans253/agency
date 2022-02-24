import Menu1 from "../menu1/Menu1";
import Menu2 from "../menu2/Menu2";
import video from "./nature.mp4";

export default function Hero() {
  return (
    <div>
      <video muted loop autoPlay className="heroVideo">
        <source src={video} type="video/mp4" />
      </video>
      <Menu1 />
      <Menu2 />
    </div>
  );
}
