import * as React from "react";
import styles from "./SearchPage.module.scss";
import SearchBar from "./search-bar/SearchBar";

const SearchPage: React.FC = () => {
  const search = (symbol: string) => {
    console.log("Search will be executed for: " + symbol);
  };

  return (
    <div>
      <h1 className={styles.heading}>Digital Broker React</h1>
      <SearchBar onTermChanged={(term) => search(term)}></SearchBar>
    </div>
  );
};

export default SearchPage;
