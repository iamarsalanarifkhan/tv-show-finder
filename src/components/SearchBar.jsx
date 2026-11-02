const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="text"
          className="form-control search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a TV show..."
        />

        <span className="search-icon">⌕</span>
      </div>
    </div>
  );
};

export default SearchBar;
