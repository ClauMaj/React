import { useState, useEffect } from "react";
import MovieDetails from './MovieDetails.js';


// app function with hooks
function App() {
  const [movieData, setMovieData] = useState([]); // state/set function to store all the movie data
  const [currentMovie, setCurrentMovie] = useState({}); // state/set function to store all the movie taht was clicked on
  // similar to componentDid mount lifecycle method
  useEffect(() => {
    const setData = async () => {
      const url =
        "http://www.omdbapi.com/?s=batman&i=tt3896198&apikey=390a6051";
      //www.omdbapi.com/?i=tt0372784&apikey=74b5f590
      // imdb id           ^^
      const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data);
      setMovieData(data.Search);
    };
    setData();
  }, []); // end useEffect - very important to set the array (tracked var) after so it only gets triggered once

  console.log("run?");
  const handleClick = async (movie) => { // new fetch to the movie clicked on
    const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=74b5f590`;
    const response = await fetch(movieUrl);
    const data = await response.json();
    setCurrentMovie(data)
  }
  return <div>
    {movieData.map((movie) => { // map through all movies and display on page
      // onClick eventListener with callback so the function doesn't get triggered right away
      return (
        <button key={movie.imdbID} onClick={() => handleClick(movie)}>
          <h3>{movie.Title}</h3>
          <img height="150px" src={movie.Poster} alt="" />
        </button>
      )
    })}
    <MovieDetails details={currentMovie} />
  </div>;
}
export default App;