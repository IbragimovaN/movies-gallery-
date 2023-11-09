import { ALL_MOVIES, FAVOURITE_MOVIES } from "../constantas/localStorage.js";

export function getNewMovieListID(event) {
  const oldMovieListID = event.target.nextElementSibling.id;
  console.log(oldMovieListID);
  let newListID;
  if (oldMovieListID === FAVOURITE_MOVIES) {
    newListID = ALL_MOVIES;
  } else if (oldMovieListID === ALL_MOVIES) {
    newListID = FAVOURITE_MOVIES;
  }
  return newListID;
}
