import { useContext } from "react";
import { Link } from "react-router-dom";
import QuizContext from "../context/QuizContext";
import { UncompletedProvider } from "../context/UncompletedContext";

function Topic() {
  const { onSelectTopic, topics } = useContext(QuizContext);

  return (
    <UncompletedProvider>
      <div className="topic-holder">
        {topics.map((topic) => (
          <Link
            to={`/Difficulty`}
            className="topic"
            key={topic.tag}
            onClick={() => onSelectTopic(topic.tag)}
          >
            {topic.displayed}
          </Link>
        ))}
      </div>
    </UncompletedProvider>
  );
}

export default Topic;
