import React from "react";
import "./Searchbar.css";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="storybook-search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button onClick={handleSearchClick}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
          alt="Search Icon"
        />
      </button>
    </div>
  );
};
