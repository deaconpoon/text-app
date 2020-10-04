import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <form>
      <input onChange={handleOnChange} type="text"></input>
    </form>
  );
};
