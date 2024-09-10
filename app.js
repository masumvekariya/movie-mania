// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the movie data from movies.json
    fetch('movies.json')
        .then(response => response.json())  // Parse the JSON data
        .then(data => {
            const moviesList = document.getElementById('movies-list');  // Get the movie list section
            data.movies.forEach(movie => {
                // Create a new div for each movie
                const movieCard = document.createElement('div');
                movieCard.className = 'movie';  // Assign a CSS class to each movie card

                // Create movie card content with poster, title, year, description, and button
                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h2>${movie.title} (${movie.year})</h2>
                    <p>${movie.description}</p>
                    <button onclick="playTrailer('${movie.videoLink}', '${movie.title}')">Watch Trailer</button>
                `;

                // Append each movie card to the movie list section
                moviesList.appendChild(movieCard);
            });
        });
});

// Function to play the movie trailer
function playTrailer(videoLink, movieTitle) {
    const trailerContainer = document.getElementById('trailer-container');
    const trailer = document.getElementById('trailer');
    const movieTitleElement = document.getElementById('movie-title');

    // Set the video source to the provided link and update the title
    trailer.src = videoLink;
    movieTitleElement.textContent = movieTitle;

    // Make the trailer container visible
    trailerContainer.classList.remove('hidden');
}

// Function to close the trailer when done
function closeTrailer() {
    const trailerContainer = document.getElementById('trailer-container');
    const trailer = document.getElementById('trailer');

    // Stop the trailer and hide the container
    trailer.src = '';  // Clear the src to stop the video
    trailerContainer.classList.add('hidden');
}

// Adding the close functionality for the trailer player
document.getElementById('close-trailer').addEventListener('click', closeTrailer);
