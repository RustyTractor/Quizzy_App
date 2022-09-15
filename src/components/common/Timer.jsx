import { useContext, useEffect } from "react";
import QuizContext from "../../context/QuizContext";

const Timer = () => {
  const { timer, setTimer, gameStarted } = useContext(QuizContext);

  useEffect(() => {
    timer > 0 && gameStarted && setTimeout(() => setTimer(timer - 1), 1000);
  });

  function time_convert(num) {
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    seconds < 10 && (seconds = "0" + seconds);
    return minutes + ":" + seconds;
  }

  return <h2>{time_convert(timer)}</h2>;
};

export default Timer;
