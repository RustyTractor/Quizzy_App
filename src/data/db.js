import Dexie from "dexie";

export const dataBase = new Dexie("QuestionsDB");
dataBase.version(1).stores({
  questions:
    "++id, category , correctAnswer, difficulty, incorrectAnswers, question, tags, type",
});
