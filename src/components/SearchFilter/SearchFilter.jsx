import PropTypes from "prop-types";

export const SearchFilter = ({ searchInput }) => (
  <label>
    <input
      style={{ display: "block" }}
      type="text"
      placeholder=" Find contacts by name"
      onChange={searchInput}
    ></input>
  </label>
);

SearchFilter.propTypes = {
  filter: PropTypes.string,
  filteredArr: PropTypes.func,
};
