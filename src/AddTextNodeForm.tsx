import React, { useState } from "react";

export const AddTextNodeForm = () => {
  const [newTextNode, setNewTextNode] = useState("");
  return (
    <form>
      <input type="text"></input>
      <button type="submit">Add Text Node</button>
    </form>
  );
};
