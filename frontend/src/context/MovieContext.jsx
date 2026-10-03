import {createContext, useContext, useState, useEffect} from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // Load from localStorage up front so the save effect below never overwrites it with []
    const [favourites, setFavourites] = useState(() => {
        const storedFavs = localStorage.getItem("favoriteMovies");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourite = (movie) => {
        setFavourites(prev => [...prev, movie]);
    }

    const removeFavourite = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addToFavourite,
        removeFavourite,
        isFavourite,
    }
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
