import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ShowList from "./ShowList";

const Home = () => {
  const [tvShows, setTVShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (tvShows) => {
    setFavorites((prev) => [...prev, tvShows]);
  };

  useEffect(() => {
    const getTVShows = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`,
        );
        if (!response.ok) {
          throw new Error("Failed to load Shows");
        }
        const data = await response.json();
        console.log(data);
        setTVShows(data);
      } catch (error) {
        setError("Failed to load TV Shows");
      } finally {
        setLoading(false);
      }
    };

    getTVShows();
  }, [search]);

  return (
    <div className="tv-app min-vh-100">
      <div className="container py-4 py-md-5">
        <header className="app-header mb-5">
          <h1 className="app-title">🎬 TV Show Finder</h1>
          <p className="app-subtitle">Discover your next favorite TV show</p>
        </header>

        <SearchBar search={search} setSearch={setSearch} />

        {favorites.length > 0 && (
          <section className="favorites-section mt-5">
            <h2 className="section-title mb-4">❤️ My Favorites</h2>

            <div className="favorites-list">
              {favorites.map((favorite, index) => (
                <span key={index} className="favorite-badge">
                  {favorite.show.name}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="shows-section mt-5">
          <h2 className="section-title mb-4">Popular TV Shows</h2>


          {loading && (
              <div className="text-center py-5">
              <div className="spinner-border text-danger" role="status" />
              <p className="mt-3">Loading shows...</p>
            </div>
          )}

          {error && <div className="alert alert-danger">{error}</div>}
          
          <ShowList tvShows={tvShows} addFavorite={addFavorite} />
        </section>
      </div>
    </div>
  );
};

export default Home;
