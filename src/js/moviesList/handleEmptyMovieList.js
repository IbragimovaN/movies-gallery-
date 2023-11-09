import { getFavoriteMovies } from "../localStorage/setGetAllMovies.js";
import { FAVOURITE_MOVIES } from "../constantas/localStorage.js";

export function handleEmptyMovieList(movieContainer) {
  const favouriteMovies = getFavoriteMovies();
  if (favouriteMovies.length === 0 && movieContainer.id === FAVOURITE_MOVIES) {
    movieContainer.insertAdjacentHTML(
      "afterbegin",
      `<h3>Sorry you have not saved anything to favourites</h3>`
    );
  }
}
