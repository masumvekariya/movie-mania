# Movie Mania

**Movie Mania** is a dynamic web application where users can search for their favorite movies or TV series and view detailed information. This project utilizes the OMDb API for fetching real-time movie and series data, providing an engaging and professional user experience.

---

## Features

- **Search Movies/TV Series**: Users can search for any movie or series by title.
- **Dynamic Movie List**: Displays a list of movies based on the search results.
- **Movie Details Page**: Redirects users to a new page with detailed information about the selected movie or series.
- **Responsive Design**: Built with **Tailwind CSS** and custom CSS for a clean, responsive layout.
- **Error Handling**: Displays appropriate messages for invalid searches or API errors.
- **Interactive UI**: Smooth hover effects, transitions, and a professional design.

---

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - Tailwind CSS
- **Backend/Logic**:
  - JavaScript (Fetch API)
  - OMDb API (http://www.omdbapi.com/)

---

## Project Structure

```
movie-mania/
├── index.html         # Main homepage with search and movie list
├── movie-details.html # Movie details page for individual movie/series
├── style.css          # Custom styles
├── app.js             # Core JavaScript for fetching and displaying data
└── placeholder.jpg    # Default image if a movie poster is unavailable
```

---

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/movie-mania.git
   ```
2. Obtain an OMDb API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).
3. Replace the placeholder API key in `app.js`:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```
4. Open `index.html` in your browser to explore the homepage.
5. Search for any movie or TV series using the search bar, and click on "View Details" to explore more.

---

## API Integration

The project uses the **OMDb API** to fetch real-time movie and series data. The API endpoint structure is as follows:

1. **Search for movies/series**:
   ```
   http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_TERM
   ```
2. **Get details of a specific movie/series**:
   ```
   http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=IMDB_ID
   ```

---

## JSON Data Example

Example of movie data fetched via the OMDb API:
```json
{
    "Search": [
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://linktoimage.jpg"
        },
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://linktoimage.jpg"
        }
    ]
}
```

---

## Key Features in Code

1. **Homepage**:
   - Displays a hero section with a "Discover Movies" button.
   - Dynamically fetches and displays movies using the OMDb API.
   - Includes responsive design for desktop and mobile screens.

2. **Movie Details Page**:
   - Fetches detailed data about a movie or series using its IMDb ID.
   - Displays information like the title, year, genre, plot, director, cast, and more.

3. **Error Handling**:
   - Alerts users when no data is available or an API error occurs.

---

## Future Enhancements

- Add user authentication for personalized experiences.
- Enable saving favorite movies or series to a "Watchlist."
- Integrate a "Movie Rating System."
- Allow users to leave reviews or comments.

---

## License

This project is licensed under the **MIT License**. You are free to fork, modify, and distribute this project as per the license terms.

