/**
 * @returns a list of movies come from API
 */
async function getMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a5c6c25d6fedeb48911f87c2e087261e&language=en-US&page=1"
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
}
export default getMovies;
