import Card from "./Card.js";

/**
 * Display a list of movies
 * @param {Array} movies
 * @param {Object} containerBody
 */
function getAllMovies(movies, containerBody) {
  containerBody.innerHTML = "";
  movies.forEach((movie) => {
    const card = Card(movie);
    return (containerBody.innerHTML += card);
  });
}

/**
 * Filter movies list by title
 * @param {Array} movies
 * @param {Object} inputValue
 * @param {Object} containerBody
 */
function getMovieByTitle(movies, inputValue, containerBody) {
  inputValue.addEventListener("keyup", (evt) => {
    let movieTitle = evt.target.value;

    let data = movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(movieTitle.toLowerCase()) >= 0;
    });

    getAllMovies(data, containerBody);
  });
}

export default { getAllMovies, getMovieByTitle };
