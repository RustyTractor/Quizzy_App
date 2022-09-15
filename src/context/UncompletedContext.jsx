import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import QuizContext from "./QuizContext";

const UncompletedContext = createContext();

export const UncompletedProvider = ({ children }) => {
  const { gameStarted, setGameStarted, setTimer } = useContext(QuizContext);

  const clearSession = () => {
    setGameStarted(false);
    setTimer(90);
    sessionStorage.clear();
  };

  return (
    <UncompletedContext.Provider value={{}}>
      {gameStarted ? (
        <div
          style={{ flexDirection: "column", textAlign: "center" }}
          className="holder"
        >
          <p>
            You cant step back durring the quiz. You have to start a new game!
          </p>
          <div className="btn">
            <div className="btn-out">
              <Link
                onClick={() => clearSession()}
                to={"/"}
                className="btn-inner"
              >
                NEW
              </Link>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </UncompletedContext.Provider>
  );
};

export default UncompletedContext;
