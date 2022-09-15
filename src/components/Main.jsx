import { UncompletedProvider } from "../context/UncompletedContext";
import ButtonJustO from "./common/ButtonJustO";

function Main() {
  return (
    <UncompletedProvider>
      <div className="holder">
        <h2>Rules of the game</h2>
        <p>You have 1:30 minute for 10 question.</p>
        <p>Can't pause the game while playing.</p>
        <p>The essence of the game to have fun!</p>
        <p>
          Before the game , you have to choice from few topics, like history or
          music, etc.. Then you can pick the difficulty of the game.
        </p>
        <p>
          After all of these, you don't have anything to do, just enjoy the fun!
        </p>
        <ButtonJustO directon="/Topic">START</ButtonJustO>
      </div>
    </UncompletedProvider>
  );
}

export default Main;
