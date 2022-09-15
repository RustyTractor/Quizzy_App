import { catchError, of, switchMap } from "rxjs";
import { fromFetch } from "rxjs/fetch";

export const questions$ = fromFetch(
  `https://the-trivia-api.com/api/questions?categories=geography,history,music,science&limit=50`
).pipe(
  switchMap((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError((err) => {
    console.log(err);
    return of({ error: true, message: err.message });
  })
);

export const filterQuestions = (cat, diff) => {
  const filteredQuestions$ = fromFetch(
    `https://the-trivia-api.com/api/questions?categories=${cat}&limit=11&difficulty=${diff}`
  ).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      console.log(err);
      return of({ error: true, message: err.message });
    })
  );

  return filteredQuestions$;
};
