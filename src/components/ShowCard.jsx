const ShowCard = ({ tvShow, addFavorite }) => {
  return (
    <div className="show-card h-100">
      <div className="poster-wrapper">
        <img
          src={tvShow.show.image?.medium}
          alt={tvShow.show.name}
          className="show-poster"
        />

        <button
          className="favorite-btn"
          onClick={() => addFavorite(tvShow)}
          aria-label="Add to favorites"
        >
          ♡
        </button>
      </div>

      <div className="show-info">
        <h3 className="show-title">{tvShow.show.name}</h3>

        <p className="show-rating">
          <span className="rating-star">★</span>
          {tvShow.show.rating.average ?? "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
