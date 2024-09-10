// Get query parameter from URL to fetch movie details
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        const movie = data.movies.find(m => m.id === movieId);

        if (movie) {
            document.getElementById('movie-poster').src = movie.poster;
            document.getElementById('movie-title').innerText = movie.title;
            document.getElementById('movie-year').innerText = movie.year;
            document.getElementById('movie-description').innerText = movie.description;
            document.getElementById('movie-video').src = movie.videoLink;
        } else {
            alert('Movie not found!');
        }
    });
