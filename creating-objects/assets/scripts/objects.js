// objects are of course made up of primitive values.
// let complexPerson = {
//   name: "Ion",
//   hobbies: ["Sports", "Cooking"],
//   address: {
//     street: "Some Street 5",
//     stateId: 5,
//     country: "Germany",
//     phone: {
//       number: 123456789,
//       isMobile: true,
//     },
//   },
//   greet: function () {
//     alert("Hi");
//   },
// };

// // Add, delete, modify

// complexPerson.isAdmin = true; //add
// complexPerson.address.stateId = 3; // modify
// delete complexPerson.address.stateId; // delete

// console.log(complexPerson);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie?.info?.title.includes(filter));

  for (const movie of filteredMovies) {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    const { title: movieTitle } = info;
    let text = movieTitle + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  }
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: { title, [extraName]: extraValue },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// Spread operator

// Object.Assign()
