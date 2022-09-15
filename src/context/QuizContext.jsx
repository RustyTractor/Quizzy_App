import { createContext, useState } from "react";
import { difficultiesData, topicsData } from "../data/allKind";
import { addQuestions } from "../data/dbFunctions";

/**
 * Quiz Context.
 * Hold together every variable,
 * and functions that you need
 * in your global application.
 */

addQuestions();

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [topic, setTopic] = useState();
  const [difficulty, setDifficulty] = useState();
  const [timer, setTimer] = useState(
    sessionStorage.getItem("timer") !== null
      ? sessionStorage.getItem("timer")
      : 90
  );
  const [isOnline, setIsOnline] = useState(false);
  const [gameStarted, setGameStarted] = useState(
    sessionStorage.getItem("started") !== undefined
      ? sessionStorage.getItem("started")
      : false
  );

  const topics = topicsData;
  const difficulties = difficultiesData;

  const onSelectTopic = (topic) => {
    setTopic(topic);
  };

  const onSelectDifficulty = (diff) => {
    setDifficulty(diff);
  };

  return (
    <QuizContext.Provider
      value={{
        topic,
        topics,
        difficulty,
        difficulties,
        gameStarted,
        timer,
        isOnline,
        setIsOnline,
        setTimer,
        setGameStarted,
        onSelectTopic,
        onSelectDifficulty,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
