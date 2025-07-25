//to construct context that provides some global state and some helper function that can be used anywhere in our funtion

import { useState, useContext, createContext, useEffect } from "react";
const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext)

//provides state to any of the component wrapped around it
export const movieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    //local storage helps us store some data within our browser
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id != movieId))
    }

    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }

    //value is a key work in the provider
    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}
