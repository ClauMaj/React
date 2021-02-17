import { useState, useEffect } from "react";
import MovieDetails from './MovieDetails.js';


// app function with hooks (every time state changes the whole app is rerun)
const App = () => {
    const [movieData, setMovieData] = useState([]); // state/set function to store all the movie data
    const [currentMovie, setCurrentMovie] = useState({}); // state/set function to store all the movie taht was clicked on
    const [cache, setCache] = useState({}); // initialize cache
  // similar to componentDid mount lifecycle method
    useEffect(() => {
        const setData = async () => { // API call to get all movies and store them in setMovieData state
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



    const handleClick = async (movie) => {
    // if the movie is already cached set the selected movie from cache
    // if movie is not cached do fetch and store it in cache and set selected movie

    // when a new state is set it replaces the entire old state(pass by reference/pass by value)
    if (cache[movie.imdbID] === undefined) {

        const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=74b5f590`;

        const response = await fetch(movieUrl);
        const data = await response.json();

        let newCache = {...cache, [movie.imdbID]:data}  // spread the old data and add new entry
        setCurrentMovie(data)
        console.log('storing new data to cache table');
        setCache(newCache);
        } else {
        console.log('data coming from cache');
        setCurrentMovie(cache[movie.imdbID])
        }
    }


    return <div>
        {movieData.map((movie)=>{ // map through all movies and display on page
            // onClick eventListener with callback so the function doesn't get triggered right away
        return (
            <button key={movie.imdbID} onClick={()=>handleClick(movie)}>  
            <h3>{movie.Title}</h3>
            <img height="150px" src={movie.Poster} alt=""/>
            </button>
        )
    })}
    <MovieDetails details={currentMovie}/>
    </div>;
}
export default App;