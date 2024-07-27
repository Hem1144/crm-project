// App.tsx
import React from "react";
import { SearchBar } from "../searchBar//Searchbar";

const Searchbar: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <SearchBar onSearch={handleSearch} placeholder="Search here..." />
      </header>
    </div>
  );
};

export default Searchbar;
