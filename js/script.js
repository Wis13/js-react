const numberOfFilms = +prompt("How many films have you watched?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Which was the last movie you watched?', ''),
      b = prompt('How much will you rate it?', ''),
      c = prompt('Which was the last movie you watched?', ''),
      d = prompt('How much will you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)
