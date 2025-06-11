 import MovieCard from "../components/MovieCard"
 import { useState } from "react"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2009"},
        {id: 1, title: "Terminator", release_date: "1999"},
        {id: 1, title: "The Matrix", release_date: "1998"}
    ]

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