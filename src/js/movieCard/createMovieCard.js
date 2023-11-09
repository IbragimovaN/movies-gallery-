export function createMovieCard(movie) {
  const { id, releaseYear, description, movieName, imageUrl, isFavourite } =
    movie;
  const heartIcon = isFavourite ? 'favourite.svg' : 'not-favourite.svg';
  //create movie card
  return `
        <div class="movie-card"data-movie-id = ${id}>
        <img src="${imageUrl}" alt="${movieName}">
            <h6>${movieName}</h6>
            <p>${description}</p>
            <strong>${releaseYear}</strong>
            <button class="movie-card-btn-icon">
                <img src="../../public/assets/icons/${heartIcon}" alt="">
            </button>
        </div>
        `;
}
