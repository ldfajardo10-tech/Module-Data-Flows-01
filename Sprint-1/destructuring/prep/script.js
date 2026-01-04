const state = { // we create a const state with an object with two properties (films, searchTerm) where films is an array that contains objects with the info of each movie and the searchTerm contains a empty string.
    films : [
{
title: "Killing of Flower Moon",
director: "Martin Scorsese",
times: ["15:35"],
certificate: "15",
duration: 112,
},
{
title: "Typist Artist Pirate King",
director: "Carol Morley",
times: ["15:00", "20:00"],
certificate: "12A",
duration: 108,
},
{
title: "the simpsons",
director: "???????",
times: ["15:00", "20:00"],
certificate: "12A",
duration: 108,
}
],
    searchTerm : "",
}

function createFilmCard(film) { // in this function we query the elements on the html and we also clone the node for the template to create film cards for each movie
const filmCard = document
.getElementById("film-card-template")
.content.cloneNode(true);
filmCard.querySelector("h3").textContent = film.title;
filmCard.querySelector("p").textContent = film.director;
return filmCard;
}



function render() { // we create this function to use it every time we do a different search
    const filteredFilms = state.films.filter(function(film) { //we filter the movies to search the input value
        return film.title.includes(state.searchTerm); // we check if the film includes the user input 
    });

    const filmCards = filteredFilms.map(createFilmCard);
    document.getElementById("film-container").append(...filmCards);
}

render(); //we call our render function so we can see the list of movies when we are not searching

const input = document.querySelector("input"); // we query the user input 
input.addEventListener("keyup", function () {  // we add event listener to catch the input value
    state.searchTerm = input.value;

    document.getElementById("film-container").innerHTML = ""; // clear the previous films when searching
    render(); // we call render so we see the filtered film on the search
});
