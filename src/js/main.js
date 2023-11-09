//set LocalSrorage
import {
  getFavoriteMovies,
  setAllMovies,
  getAllMovies,
} from "./localStorage/setGetAllMovies.js";
import { ALL_MOVIES, FAVOURITE_MOVIES } from "./constantas/localStorage.js";
import { createMovieCard } from "./movieCard/createMovieCard.js";
import { getNewMovieListID } from "./moviesList/getNewMoviesListID.js";
import { handleListsSwitching } from "./moviesList/handleListsSwitching.js";
import { handleSaveToFavourites } from "./movieCard/handleSaveToFavourites.js";
import { handleEmptyMovieList } from "./moviesList/handleEmptyMovieList.js";

setAllMovies();

const btnMoviesListsSwitcher = document.querySelector(
  ".movies-container-switch-list"
);
btnMoviesListsSwitcher.addEventListener("click", (event) => {
  const newMovieListID = getNewMovieListID(event);
  handleListsSwitching(event, newMovieListID);

  const movieContainer = createMovieContainer(newMovieListID);
  attachContainer(movieContainer, event.target);
});

const movieContainer = createMovieContainer();
attachContainer(movieContainer, btnMoviesListsSwitcher);

//create movie container
function createMovieContainer(movieListId = FAVOURITE_MOVIES) {
  const movieContainer = document.createElement("div");
  movieContainer.id = movieListId;
  movieContainer.className = "movies-container-list";
  let movieList;

  if (movieListId === FAVOURITE_MOVIES) {
    movieList = getFavoriteMovies();
  } else if (movieListId === ALL_MOVIES) {
    movieList = getAllMovies();
  }

  movieList.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    //attach movie card to container
    movieContainer.insertAdjacentHTML("afterbegin", movieCard);
  });

  movieContainer.addEventListener("click", (event) => {
    handleSaveToFavourites(event, movieListId);
    handleEmptyMovieList(movieContainer);
  });
  return movieContainer;
}

//attach movie container to target element

function attachContainer(container, targetElement) {
  const oldMovieContainer = document.querySelector(".movies-container-list");
  if (oldMovieContainer) {
    oldMovieContainer.remove();
  }
  targetElement.insertAdjacentElement("afterend", container);
}
