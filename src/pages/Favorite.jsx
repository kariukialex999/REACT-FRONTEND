import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorite() {

    const {favorites} = useMovieContext();

    if(favorites) {
        <div className="favorites">
            <h2>Your Favorites</h2>
        return <div className="movie-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
        </div>
    }


    return (
    <div className="favorites-empty" >
        <h2>No Favorte Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
    );
}


export default Favorite