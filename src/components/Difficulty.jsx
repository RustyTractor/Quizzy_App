import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuizContext from "../context/QuizContext";
import { UncompletedProvider } from "../context/UncompletedContext";

function Difficulty() {
  const { onSelectDifficulty, difficulties, gameStarted } =
    useContext(QuizContext);
  const navigate = useNavigate();

  // Don't let the user to close the game , while runing ... :D
  useEffect(() => {
    if (gameStarted) {
      navigate("/Game");
    }
  });

  return (
    <UncompletedProvider>
      <h2>Choose a difficulty level...</h2>
      <div className="difficulty-holder">
        {difficulties.map((diff) => (
          <div className="btn" key={diff}>
            <div className="btn-out">
              <Link
                to={`/Game`}
                className={`btn-inner ${diff}`}
                onClick={() => onSelectDifficulty(diff)}
              >
                {diff.toUpperCase()}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </UncompletedProvider>
  );
}

export default Difficulty;
