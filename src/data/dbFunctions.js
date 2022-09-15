import { dataBase } from "./db";
import { questions$ } from "./questions";
const numberOfDownloads = 12;

export const addQuestions = () => {
  // Dont let us to store to many questions... :D
  let length = 0;
  if (localStorage.getItem("length") != null) {
    length = parseInt(localStorage.getItem("length"));
  } else {
    localStorage.setItem("length", length);
  }

  while (length < numberOfDownloads) {
    questions$.subscribe((result) => {
      result.map((que) => {
        let id = que.id;
        let category = que.tags.pop();
        let correctAnswer = que.correctAnswer;
        let difficulty = que.difficulty;
        let incorrectAnswers = que.incorrectAnswers;
        let question = que.question;
        let tags = que.tags;
        let type = que.type;
        try {
          dataBase.questions.add({
            id,
            category,
            difficulty,
            incorrectAnswers,
            correctAnswer,
            question,
            tags,
            type,
          });
        } catch (error) {
          console.log(error);
        }

        return null;
      });
    });

    length++;
    localStorage.setItem("length", length);
  }

  return true;
};
