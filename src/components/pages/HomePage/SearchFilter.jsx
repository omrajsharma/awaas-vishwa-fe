import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchFilters = ({ filters, setFilters }) => {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <div className="search-filter">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            className="search-button"
            onClick={(e) => {
              setFilters({ ...filters, input: search });
              e.preventDefault();
            }}
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchFilters;
