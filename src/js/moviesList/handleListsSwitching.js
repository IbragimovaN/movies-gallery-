import { ALL_MOVIES, FAVOURITE_MOVIES } from "../constantas/localStorage.js";

export function handleListsSwitching(event, newListID) {
  const movieListTitle = event.target.previousElementSibling;
  // console.log(movieListTitle);
  if (newListID === FAVOURITE_MOVIES) {
    movieListTitle.innerText = "Favourite Movies";
    event.target.textContent = "Click me to see all movies";
  } else if (newListID === ALL_MOVIES) {
    movieListTitle.innerText = "All Movies";
    event.target.textContent = "Click me to see Favourite movies";
  }
}
