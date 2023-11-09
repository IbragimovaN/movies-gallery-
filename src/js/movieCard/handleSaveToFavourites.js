import { ALL_MOVIES, FAVOURITE_MOVIES } from "../constantas/localStorage.js";
import { getAllMovies, setAllMovies } from "../localStorage/setGetAllMovies.js";

export function handleSaveToFavourites(event, movieListId) {
  const clickedBtnHeartIcon = event.target.closest(".movie-card-btn-icon");
  if (!clickedBtnHeartIcon) {
    return;
  }
  const clickedMovieCard = event.target.closest(".movie-card");
  const clickedMovieCardID = clickedMovieCard.dataset.movieId;
  console.log(clickedMovieCardID);

  const allMovies = getAllMovies();
  if (!allMovies.length) {
    return;
  }

  const updateMovies = allMovies.map((movie) => {
    if (movie.id === Number(clickedMovieCardID)) {
      return {
        ...movie,
        isFavourite: !movie.isFavourite,
      };
    } else {
      return {
        ...movie,
      };
    }
  });

  setAllMovies(updateMovies);
  if (movieListId === FAVOURITE_MOVIES) {
    clickedMovieCard.remove();
  } else if (movieListId === ALL_MOVIES) {
    const movie = updateMovies.find(
      (movie) => movie.id === Number(clickedMovieCardID)
    );
    if (!movie) {
      return;
    }
    const { isFavourite } = movie;
    const heartIcon = isFavourite ? "favourite.svg" : "not-favourite.svg";
    clickedBtnHeartIcon.insertAdjacentHTML(
      "beforeend",
      `<img src="../../public/assets/icons/${heartIcon}" alt="">`
    );
    clickedBtnHeartIcon.children[0].remove();
  }
}
