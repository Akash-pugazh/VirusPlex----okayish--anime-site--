import { useState } from "react";
import { searchAnimeFetcher } from "../../Api/Api";
import SearchFilter from "../../Utilities/SearchFilter";

const SearchBar = ({ getAnimeList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    searchAnimeFetcher(inputValue).then(response => {
      const filteredSearchResult = SearchFilter(response);
      getAnimeList(filteredSearchResult);
    });
    setInputValue("");
  };

  const handleChange = e => {
    const data = e.target.value;
    setInputValue(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={inputValue}
        className="select-none transition ease-linear duration-400 border-2 border-gray-300 focus:outline-none focus:placeholder:text-transparent focus:border-blue-600 p-1 pl-2 pr-10 rounded-md dark:border-gray-400 dark:text-white dark:bg-transparent"
        placeholder="Search 🔍"
        type="text"
        name="input"
        id="input"
      />
    </form>
  );
};

export default SearchBar;
