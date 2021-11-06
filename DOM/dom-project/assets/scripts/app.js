const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  console.log(movies);
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancel = deleteMovieModal.querySelector(".btn--passive");
  let confirm = deleteMovieModal.querySelector(".btn--danger");
  confirm.replaceWith(confirm.cloneNode(true));
  confirm = deleteMovieModal.querySelector(".btn--danger");
  cancel.removeEventListener("click", closeMovieDeletionModal);
  cancel.addEventListener("click", closeMovieDeletionModal);
  confirm.addEventListener("click", deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5</p>
    </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const backDropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please Enter a valid rating value between 1 and 5");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  if (
    !titleValue.trim() === "" ||
    !imageUrlValue.trim() === "" ||
    !ratingValue.trim() === "" ||
    !+ratingValue < 1 ||
    !+ratingValue > 5
  ) {
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(
      newMovie.id,
      newMovie.title,
      newMovie.image,
      newMovie.rating
    );
    updateUI();
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
