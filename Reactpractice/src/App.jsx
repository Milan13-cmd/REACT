import { useState, useEffect } from 'react'
import SearchIcon from './assets/search.svg'
import './App.css'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=4bfcf4cf'

const movie1 = {
  "Title": "Ironman Triathlon World Championship",
  "Year": "2002",
  "imdbID": "tt10239424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzcxZTIzNjUtZWEwYi00NWU0LTg2MzctZTBmZjNjNmZiNzZlXkEyXkFqcGdeQXVyMjcxMjE1OTM@._V1_SX300.jpg"
}
function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
   useEffect(() => {
    searchMovies(`Ironman`)
   },[])
  return (
   
   <div className='app'>
    <h1>Movies</h1>
    <div className='search'>
      <input
      placeholder='Search for movies'
      value={search}
      onChange={(e) => setSearch(e.target.value) }
      />
      <img
      src={SearchIcon}
      alt='search'
      onClick={() => searchMovies(search)}/>
    </div>

    {movies?.length > 0
      ? (
      <div className='container'>
       {movies.map((movie) => (
        <MovieCard movie={movie}/>
       ))}
       </div>) : 
      <div className='empty'>
      <h1>No movies found</h1>
      </div>
    }
   </div>
   
  )
}

export default App
