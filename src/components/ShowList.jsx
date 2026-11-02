import ShowCard from "./ShowCard";

const ShowList = ({ tvShows, addFavorite }) => {
  return (
    <div className="row g-4">
      {tvShows.map((tvShow) => (
        <div className="col-6 col-md-4 col-lg-3" key={tvShow.show.id}>
          <ShowCard tvShow={tvShow} addFavorite={addFavorite} />
        </div>
      ))}
    </div>
  );
};

export default ShowList;
