const API_KEY = "3fb846f9"; // Your API key
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

// Elements
const moviesList = document.getElementById("movies-list");

// Fetch movies by title
async function fetchMovies(searchTerm = "avengers") {
    try {
        // Display loading message
        moviesList.innerHTML = `<p class="text-center text-gray-300">Loading movies...</p>`;

        const response = await fetch(`${API_URL}${searchTerm}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            moviesList.innerHTML = `<p class="text-center text-red-500">${data.Error}</p>`;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        moviesList.innerHTML = `<p class="text-center text-red-500">Failed to load movies. Try again later.</p>`;
    }
}

// Display movies on the homepage
function displayMovies(movies) {
    moviesList.innerHTML = movies
        .map((movie) => createMovieCard(movie))
        .join("");
}

// Create individual movie cards
function createMovieCard(movie) {
    return `
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="${movie.Title}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold">${movie.Title}</h3>
                <p class="text-gray-400 text-sm">Year: ${movie.Year}</p>
                <button 
                    onclick="redirectToDetailsPage('${movie.imdbID}')"
                    class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Redirect to the details page
function redirectToDetailsPage(imdbID) {
    window.location.href = `movie-details.html?id=${imdbID}`;
}

// Fetch movies when the page loads
document.addEventListener("DOMContentLoaded", () => fetchMovies());
