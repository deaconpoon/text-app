import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import search from "./asset/search.svg";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setQuery, query }) => {
  const searchRef = useRef<any>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  useEffect(() => {
    searchRef.current.focus();
  }, [query]);

  return (
    <form className="textNode__search">
      <div className="textNode__search__container">
        <img
          alt="search icon"
          className="textNode__search--img"
          src={search}
        ></img>
        <input
          ref={searchRef}
          name="text node search bar"
          placeholder="Search something"
          className="textNode__search__input"
          onChange={handleOnChange}
          type="text"
        ></input>
      </div>
    </form>
  );
};
