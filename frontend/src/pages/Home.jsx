import {useState, useEffect} from 'react'
import {getMoviesList, searchMoviesList} from '../services/api.js';
import MovieCard from "../Components/MovieCard.jsx";
import '../css/Home.css'


function Home() {
    const [search, setSearch] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMoviesList = async () => {
            try{
                const movies = await getMoviesList();
                setMoviesList(movies);
            } catch (error) {
                setError("failed to load movies");
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        loadMoviesList();
    },[])



    const handleSearch = async (e) => {
        e.preventDefault() // doesn't default refresh
        if(!search.trim()) return
        if(loading) return;

        setLoading(true);
        try{
            const searchResult = await searchMoviesList(search);
            setMoviesList(searchResult);
            setError(null);
        }catch(error){
            setError("failed to load movies");
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-mesage">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
            <div className="movies-grid">
                {moviesList.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />))}
            </div>
                )}
        </div>
    )
}

export default Home;