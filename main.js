import dataServices from "./dataServices.js";
import getMovies from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  let movies = [];
  const containerBody = document.getElementById("container_body");
  const inputValue = document.getElementById("search");

  try {
    movies = await getMovies();
    dataServices.getAllMovies(movies, containerBody);
    dataServices.getMovieByTitle(movies, inputValue, containerBody);
  } catch (error) {
    console.error(error.message);
  }
});
