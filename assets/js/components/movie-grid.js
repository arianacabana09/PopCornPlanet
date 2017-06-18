// otro js
use strict

const movieItem = (movie) => {
  const item = $('<a href="" class="movie"></div>');
  const image = $('<img class="movie-thumb" src="${movie.thumb}" alt="$(movie.title)">');

  const p = $('<p>' + movie.title + '</p>');

  item.append(image);
  item.append(p);

  item.on()

  return item
}


const MovieGrid = () => {
  const movieContainer = $('<div class="movieContainer"></div>');
  state.movies.forEach((movie) => {
    movieContainer.append(mpvieItem(movie));
  });
};
