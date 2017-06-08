'use strict';
//
// $( () => {
//   alert("holaaaa");
// });


const render = (root) => {
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  if (state;selectedMovie == null){
  wrapper.append(MovieGrid( _ =>{
    render(root);
  });
} else {

}
)

  root.append(wrapper);
};

const state = {
  movies: [],
  selectedMovie: null;
}


// // otro js
// use strict
//
// const movieItem = (movie) => {
//   const item = $('<div class="movie"></div>');
//   const image = $(<img src="${movie.thumb}" alt="$(movie.title)">);
//
//   const p = $('<p>' + movie.title + </p>);
//
//   item.append(image);
//   item.append(p);
//
//   return item
// }
//
//
// const MovieGrid = () => {
//   const movieContainer = $('<div class="movieContainer"></div>');
//   state.movies.forEach((movie) => {
//     movieContainer.append(mpvieItem(movie));
//   });
// };

// // moovie.js
// [{
//   "title":"Wonder Woman",
//   "thumb": "url.jpg"
// },
// {
//   "title":"Piratas del Caribe",
//   "thumb": "url.jpg"
// }];
