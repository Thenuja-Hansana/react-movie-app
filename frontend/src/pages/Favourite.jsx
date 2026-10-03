import '../css/Favorites.css'
import {useMovieContext} from '../context/MovieContext'
import MovieCard from '../Components/MovieCard'

function Favourite() {
    const {favourites} = useMovieContext();

    if (favourites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favourites.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />))}
                </div>
            </div>


        )
    }
    return (
        <div className="favorites-empty">
            <h2>No Favourite movies yet</h2>
            <p>Start adding movies to your favourite..</p>
        </div>
    )
}


export default Favourite;
