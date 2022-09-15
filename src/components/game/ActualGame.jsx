import { useContext, useEffect, useState } from "react";
import QuizContext from "../../context/QuizContext";
import Timer from "../common/Timer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ActualGame({ questions }) {
  const navigate = useNavigate();
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const { timer } = useContext(QuizContext);
  const [count, setCount] = useState(
    sessionStorage.getItem("count") !== null
      ? parseInt(sessionStorage.getItem("count"))
      : 0
  );
  const [correct, setCorrect] = useState(
    sessionStorage.getItem("correct") !== null
      ? parseInt(sessionStorage.getItem("correct"))
      : 0
  );

  // Toast the Answers!
  const checkTheAnswer = (question) => {
    setCount(count + 1);
    if (question === questions[count].correctAnswer) {
      toast.success("The answer is correct!");
      setCorrect(correct + 1);
    } else {
      toast.error(`The correct answer is: ${questions[count].correctAnswer}`);
    }

    // Store the question with correkt answer into SessionStorage
    sessionStorage.setItem(
      count,
      JSON.stringify([question, questions[count].correctAnswer])
    );
  };

  useEffect(() => {
    sessionStorage.setItem("count", count);
    sessionStorage.setItem("correct", correct);
    sessionStorage.setItem("timer", timer);

    if (timer === 0 || count === 10) {
      if (timer === 0 && count < 10) {
        toast("You are out of time...", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      navigate("/GameOver");
    }
  }, [count, correct, timer, navigate]);

  useEffect(() => {
    let currentAnswers;
    if (questions[count] !== undefined) {
      currentAnswers = [
        ...questions[count].incorrectAnswers,
        ...[questions[count].correctAnswer],
      ];
    }

    setShuffledAnswers(currentAnswers.sort((a, b) => 0.5 - Math.random()));
  }, [count, questions]);

  return (
    <div className="holder">
      <div>
        <p className="counter">{count + 1}/10</p>
      </div>
      <span>
        <p className="question">{questions[count].question}</p>
      </span>
      <div className="timer">
        <Timer />
      </div>
      <div className="progressbar"></div>
      <div className="answers">
        {shuffledAnswers.map((ca) => (
          <div className="answer-btn" key={ca}>
            <button
              className="answer-btn-inner"
              onClick={() => checkTheAnswer(ca)}
            >
              {ca}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActualGame;
