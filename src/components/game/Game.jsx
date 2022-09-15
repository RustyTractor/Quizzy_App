import { useLiveQuery } from "dexie-react-hooks";
import { useContext, useEffect, useState } from "react";
import QuizContext from "../../context/QuizContext";
import { dataBase } from "../../data/db";
import { filterQuestions } from "../../data/questions";
import ActualGame from "./ActualGame";

function Game() {
  const { topic, difficulty, setGameStarted, gameStarted, isOnline } =
    useContext(QuizContext);

  const [questions, setQuestions] = useState([]);

  const ques = useLiveQuery(() => dataBase.questions.toArray());

  useEffect(() => {
    if (!gameStarted) {
      setGameStarted(true);
      sessionStorage.setItem("started", true);
    }
    if (sessionStorage.getItem("questions") != null) {
      setQuestions(JSON.parse(sessionStorage.getItem("questions")));
    } else {
      if (isOnline) {
        filterQuestions(topic, difficulty).subscribe((result) => {
          setQuestions(result);
          sessionStorage.setItem("questions", JSON.stringify(result));
        });
      } else {
        if (ques !== undefined) {
          const ques2 = ques
            .sort((a, b) => 0.5 - Math.random())
            .filter((q) => q.category === topic && q.difficulty === difficulty);
          setQuestions(ques2);
          sessionStorage.setItem("questions", JSON.stringify(ques2));
        }
      }
    }
  }, [ques, difficulty, gameStarted, isOnline, setGameStarted, topic]);

  if (questions.length > 0) {
    return (
      <>
        {questions !== undefined ? (
          <ActualGame questions={questions} />
        ) : (
          <p>Nothing</p>
        )}
      </>
    );
  }

  return (
    <div>
      <p>Loading!</p>
    </div>
  );
}

export default Game;
