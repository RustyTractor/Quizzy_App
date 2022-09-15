import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuizContext from "../../context/QuizContext";
import { SpiceyComments } from "../../data/allKind";

function GameOver() {
  const { setGameStarted, setTimer, gameStarted } = useContext(QuizContext);
  const result = parseInt(sessionStorage.getItem("correct"));
  const [text, setText] = useState("");
  const randomNumber = Math.floor(Math.random() * 1);
  const navigate = useNavigate();

  useEffect(() => {
    if (result <= 4) {
      setText(SpiceyComments.mocking[randomNumber]);
    } else if (result > 4 && result <= 6) {
      setText(SpiceyComments.notbad[randomNumber]);
    } else {
      setText(SpiceyComments.wow[randomNumber]);
    }
    if (!gameStarted) {
      navigate("/");
    }
  }, [gameStarted, result, navigate, randomNumber]);

  const resetEverything = () => {
    sessionStorage.clear();
    setGameStarted(false);
    setTimer(90);
  };

  return (
    <div className="holder">
      <h2>{text}</h2>
      <h2 style={result > 5 ? { color: "green" } : { color: "red" }}>
        {result}/10
      </h2>
      <div className="btn">
        <div className="btn-out">
          <Link
            onClick={() => resetEverything()}
            to={"/"}
            className="btn-inner"
          >
            GO BACK!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
