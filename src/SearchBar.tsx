import React, { useState } from "react";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  return (
    <form>
      <input type="text"></input>
    </form>
  );
};
