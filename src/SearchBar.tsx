import React, { useState, ChangeEvent } from "react";
import search from "./asset/search.svg";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <form className="textNode__search">
      <div className="textNode__search__container">
        <img className="textNode__search--img" src={search}></img>
        <input
          placeholder="Search something"
          className="textNode__search__input"
          onChange={handleOnChange}
          type="text"
        ></input>
      </div>
    </form>
  );
};
