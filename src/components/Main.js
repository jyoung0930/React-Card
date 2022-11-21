import Name from "./Name";
import Buttons from "./Buttons";
import About from "./AboutMe";

export default function Main() {
  return (
    <div className="main-container">
      <Name />
      <Buttons />
      <About />
    </div>
  );
}
