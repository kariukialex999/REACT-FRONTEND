 import MovieCard from "../components/MovieCard"
 import { useState, useEffect } from "react"
 import '../css/Home.css';
 import { searchMovies, getPopularMovies} from "../services/api";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setIsLoading(false) 
            }
        }
    }, [])

    const handleSearch = () => {
        alert(searchQuery)
    }

    return <div className="home">
        
         <form className="seach-form" onSubmit={handleSearch}>
            <input type="text" 
            placeholder="...search for movies" 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className="search-button" type="submit">Search</button>
         </form>

        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>

    </div>
}

export default Home