const API_KEY = "3fb846f9"; // Your API key
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Get the query parameter
const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get("id");

// Elements
const movieDetailsContainer = document.getElementById("movie-details");

// Fetch movie details
async function fetchMovieDetails() {
    try {
        const response = await fetch(`${API_URL}&i=${movieID}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovieDetails(data);
        } else {
            movieDetailsContainer.innerHTML = `<p class="text-red-500 text-center">${data.Error}</p>`;
        }
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}

// Display movie details
function displayMovieDetails(movie) {
    movieDetailsContainer.innerHTML = `
        <div class="flex flex-col lg:flex-row items-center lg:items-start">
            <img src="${movie.Poster}" alt="${movie.Title}" class="w-60 rounded shadow-lg">
            <div class="lg:ml-6">
                <h2 class="text-3xl font-bold">${movie.Title}</h2>
                <p class="text-gray-400"><strong>Year:</strong> ${movie.Year}</p>
                <p class="text-gray-400"><strong>Genre:</strong> ${movie.Genre}</p>
                <p class="text-gray-400"><strong>Director:</strong> ${movie.Director}</p>
                <p class="text-gray-400"><strong>Actors:</strong> ${movie.Actors}</p>
                <p class="text-gray-400"><strong>Plot:</strong> ${movie.Plot}</p>
                <p class="text-gray-400"><strong>IMDB Rating:</strong> ⭐${movie.imdbRating}</p>
            </div>
        </div>
    `;
}

// Fetch and display the movie details on page load
fetchMovieDetails();
