
# Movie Mania

Movie Mania is a simple web application that displays a collection of movies. It is built using HTML, CSS, JavaScript, and JSON. The goal of this project is to demonstrate how to fetch data from a local JSON file and dynamically display it on a web page.

## Features
- Display a list of movies with posters, titles, and release years.
- Responsive design using CSS Grid.
- Fetch movie data from a JSON file using JavaScript.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON

## Project Structure
```
movie-mania/
├── index.html      # Main webpage
├── style.css       # Stylesheet for the webpage
├── script.js       # JavaScript to fetch and display movies
└── movies.json     # JSON file containing movie data
```

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/movie-mania.git
   ```
2. Open `index.html` in your browser to view the website.

## JSON Data Structure
The movie data is stored in a JSON file with the following structure:
```json
{
    "movies": [
        {
            "title": "Movie Title",
            "year": "Release Year",
            "poster": "URL to Poster Image"
        }
    ]
}
```

## Contributing
Feel free to fork this repository and submit pull requests for any improvements or new features.

## License
This project is licensed under the MIT License.
